import logging
from email.message import EmailMessage
import smtplib
import httpx

from core.config import settings

logger = logging.getLogger(__name__)

BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"


async def send_brevo_email(to_email: str, subject: str, html_content: str, to_name: str = "") -> dict:
    api_key = settings.BREVO_API_KEY.strip()
    if not api_key:
        raise RuntimeError("Brevo API key is not configured.")

    sender_email = settings.BREVO_SENDER_EMAIL.strip() or "damianmalunda123@gmail.com"
    sender_name = settings.BREVO_SENDER_NAME.strip() or "MIMI NI MKULIMA"

    payload = {
        "sender": {"name": sender_name, "email": sender_email},
        "to": [{"email": to_email.strip(), "name": to_name.strip() or to_email.split("@")[0]}],
        "subject": subject,
        "htmlContent": html_content,
    }

    headers = {
        "api-key": api_key,
        "content-type": "application/json",
        "accept": "application/json",
    }

    async with httpx.AsyncClient(timeout=15.0) as client:
        response = await client.post(BREVO_API_URL, json=payload, headers=headers)
        if response.status_code >= 400:
            logger.error("Brevo email send failed (%d): %s", response.status_code, response.text)
            raise RuntimeError(f"Brevo API error: {response.text}")
        return response.json()


def send_smtp_email(to_email: str, subject: str, text_content: str, html_content: str | None = None) -> None:
    sender = settings.SMTP_FROM_EMAIL or settings.SMTP_USERNAME
    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = sender
    message["To"] = to_email
    message.set_content(text_content)
    if html_content:
        message.add_alternative(html_content, subtype="html")

    client = smtplib.SMTP_SSL if settings.SMTP_PORT == 465 else smtplib.SMTP
    with client(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as server:
        if settings.SMTP_PORT != 465 and settings.SMTP_STARTTLS:
            server.starttls()
        if settings.SMTP_USERNAME:
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
        server.send_message(message)


def _base_email_html(title: str, preheader: str, body_html: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
  body {{ margin:0; padding:0; background-color:#f4f6f0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#1f2937; }}
  .wrapper {{ max-width:560px; margin:24px auto; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e5e7eb; box-shadow:0 4px 16px rgba(0,0,0,0.06); }}
  .header {{ background:#1e2e1a; padding:28px 24px; text-align:center; }}
  .brand {{ color:#84cc16; font-size:24px; font-weight:800; letter-spacing:-0.02em; margin:0; }}
  .brand-sub {{ color:#a3e635; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; margin-top:4px; }}
  .content {{ padding:32px 28px; line-height:1.6; }}
  .h1 {{ font-size:20px; font-weight:800; color:#111827; margin:0 0 16px; }}
  .code-box {{ background:#f7fee7; border:2px dashed #84cc16; border-radius:12px; padding:20px; text-align:center; margin:24px 0; }}
  .code {{ font-size:36px; font-weight:800; letter-spacing:8px; color:#365314; font-family:monospace,Consolas; display:inline-block; margin:0; }}
  .badge {{ display:inline-block; background:#f0fdf4; color:#166534; font-size:12px; font-weight:700; padding:4px 10px; border-radius:999px; margin-top:8px; }}
  .note {{ font-size:13px; color:#6b7280; line-height:1.5; margin:16px 0 0; }}
  .footer {{ background:#f9fafb; border-top:1px solid #f3f4f6; padding:20px 24px; text-align:center; font-size:12px; color:#9ca3af; }}
</style>
</head>
<body>
<div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
  {preheader}
</div>
<div class="wrapper">
  <div class="header">
    <h1 class="brand">🌱 MIMI NI MKULIMA</h1>
    <div class="brand-sub">Grow &amp; Raise Together</div>
  </div>
  <div class="content">
    {body_html}
  </div>
  <div class="footer">
    <p style="margin:0 0 4px;">&copy; MIMI NI MKULIMA &middot; Mfumo wa Kidijitali wa Wakulima na Wafugaji.</p>
    <p style="margin:0;">Barua pepe hii imetumwa kwa usalama kupitia mfumo rasmi wa uthibitishaji.</p>
  </div>
</div>
</body>
</html>"""


async def send_password_reset_email(to_email: str, code: str) -> None:
    subject = f"MIMI NI MKULIMA - Nambari ya Uhakiki wa Nenosiri: {code}"
    body_html = f"""
      <h2 class="h1">Weka Upya Nenosiri / Reset Your Password</h2>
      <p>Habari,</p>
      <p>Tumepokea ombi la kuweka upya nenosiri la akaunti yako ya <strong>MIMI NI MKULIMA</strong>. Tumia nambari ifuatayo ya uhakiki ili kuendelea:</p>
      <div class="code-box">
        <div class="code">{code}</div>
        <div><span class="badge">Inaisha muda baada ya dakika 10</span></div>
      </div>
      <p class="note"><strong>Angalizo la Usalama:</strong> Ikiwa hukuomba kubadilisha nenosiri, tafadhali puuza ujumbe huu. Nenosiri lako litaendelea kuwa salama.</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:24px 0 16px;">
      <p style="font-size:12px;color:#9ca3af;margin:0;">English: Your verification code to reset your MIMI NI MKULIMA password is <strong>{code}</strong>. It expires in 10 minutes.</p>
    """
    preheader = f"Nambari yako ya uhakiki wa nenosiri ni {code}"
    html = _base_email_html("MIMI NI MKULIMA - Password Reset", preheader, body_html)

    if settings.BREVO_API_KEY.strip():
        try:
            await send_brevo_email(to_email, subject, html)
            logger.info("Password reset email sent via Brevo to %s", to_email)
            return
        except Exception as exc:
            logger.warning("Brevo send failed, trying SMTP fallback: %s", exc)

    if settings.SMTP_HOST and (settings.SMTP_FROM_EMAIL or settings.SMTP_USERNAME):
        try:
            send_smtp_email(to_email, subject, f"Your verification code is {code}. It expires in 10 minutes.", html)
            logger.info("Password reset email sent via SMTP to %s", to_email)
            return
        except Exception as exc:
            logger.warning("SMTP send failed: %s", exc)

    # Last resort: try Gmail SMTP with sender email (requires app password in BREVO_SENDER_EMAIL)
    try:
        sender = settings.BREVO_SENDER_EMAIL.strip() or "noreply@miminikulima.co.tz"
        msg = EmailMessage()
        msg["Subject"] = subject
        msg["From"] = f"MIMI NI MKULIMA <{sender}>"
        msg["To"] = to_email
        msg.set_content(f"Your MIMI NI MKULIMA verification code is {code}. It expires in 10 minutes.")
        msg.add_alternative(html, subtype="html")
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=15) as server:
            server.starttls()
            server.login(sender, settings.BREVO_API_KEY.strip()[:16] if settings.BREVO_API_KEY.strip() else "")
            server.send_message(msg)
        logger.info("Password reset email sent via Gmail SMTP fallback to %s", to_email)
        return
    except Exception as exc:
        logger.warning("Gmail SMTP fallback also failed: %s", exc)

    raise RuntimeError("All email delivery methods failed. Check BREVO_API_KEY or SMTP settings.")


async def send_username_change_email(to_email: str, code: str, current_username: str, new_username: str) -> None:
    subject = f"MIMI NI MKULIMA - Uhakiki wa Kubadilisha Jina la Mtumiaji: {code}"
    body_html = f"""
      <h2 class="h1">Uhakiki wa Kubadilisha Jina / Verify Username Change</h2>
      <p>Habari <strong>{current_username}</strong>,</p>
      <p>Tumepokea ombi la kubadilisha jina la akaunti yako kuwa: <strong style="color:#365314;font-size:16px;">{new_username}</strong>.</p>
      <p>Ili kuthibitisha kuwa ombi hili limetoka kwako, ingiza nambari ifuatayo ya uhakiki kwenye mfumo:</p>
      <div class="code-box">
        <div class="code">{code}</div>
        <div><span class="badge">Inaisha muda baada ya dakika 10</span></div>
      </div>
      <p class="note"><strong>Muhimu:</strong> Mara baada ya kubadilisha jina, hutaweza kubadilisha tena hadi miezi 2 ipite kulingana na vigezo na masharti ya MIMI NI MKULIMA.</p>
      <p class="note" style="color:#b91c1c;"><strong>Kama hukuomba mabadiliko haya:</strong> Linda akaunti yako mara moja na ubadilishe nenosiri lako.</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:24px 0 16px;">
      <p style="font-size:12px;color:#9ca3af;margin:0;">English: Verification code to change username from <strong>{current_username}</strong> to <strong>{new_username}</strong> is <strong>{code}</strong>. Expires in 10 minutes.</p>
    """
    preheader = f"Nambari yako ya uhakiki wa kubadilisha jina ni {code}"
    html = _base_email_html("MIMI NI MKULIMA - Badilisha Jina la Mtumiaji", preheader, body_html)

    if settings.BREVO_API_KEY.strip():
        try:
            await send_brevo_email(to_email, subject, html, to_name=current_username)
            logger.info("Username change email sent via Brevo to %s", to_email)
            return
        except Exception as exc:
            logger.warning("Brevo send failed, trying SMTP fallback: %s", exc)

    if settings.SMTP_HOST and (settings.SMTP_FROM_EMAIL or settings.SMTP_USERNAME):
        try:
            send_smtp_email(to_email, subject, f"Your username change code is {code}. It expires in 10 minutes.", html)
            logger.info("Username change email sent via SMTP to %s", to_email)
            return
        except Exception as exc:
            logger.warning("SMTP send failed: %s", exc)

    try:
        sender = settings.BREVO_SENDER_EMAIL.strip() or "noreply@miminikulima.co.tz"
        msg = EmailMessage()
        msg["Subject"] = subject
        msg["From"] = f"MIMI NI MKULIMA <{sender}>"
        msg["To"] = to_email
        msg.set_content(f"Your MIMI NI MKULIMA username change code is {code}. It expires in 10 minutes.")
        msg.add_alternative(html, subtype="html")
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=15) as server:
            server.starttls()
            server.login(sender, settings.BREVO_API_KEY.strip()[:16] if settings.BREVO_API_KEY.strip() else "")
            server.send_message(msg)
        logger.info("Username change email sent via Gmail SMTP fallback to %s", to_email)
        return
    except Exception as exc:
        logger.warning("Gmail SMTP fallback also failed: %s", exc)

    raise RuntimeError("All email delivery methods failed. Check BREVO_API_KEY or SMTP settings.")
