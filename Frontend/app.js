(()=>{
'use strict';

/* ============ Localization / Internationalization (I18N) ============ */
const I18N = {
  en: {
    nav_home: 'Home',
    nav_account: 'Account',
    nav_chat: 'Chat',
    nav_stream: 'Stream',
    nav_about: 'About',
    nav_settings: 'Settings',
    brand_sub: 'Grow and Raise Together',
    hello_back: 'Welcome back',
    hello_guest: 'Welcome to the farm',
    home_lede: 'Learn, ask questions, and connect with fellow farmers and livestock keepers.',
    door_grow_t: 'FARMING',
    door_grow_s: 'Grow Together',
    door_grow_c1: 'Learn Farming',
    door_grow_c2: 'Talk to an Expert',
    door_grow_c3: 'Chat with AI',
    door_grow_c4: 'My Farm',
    door_raise_t: 'LIVESTOCK',
    door_raise_s: 'Raise Together',
    door_raise_c1: 'Learn Livestock',
    door_raise_c2: 'Talk to an Expert',
    door_raise_c3: 'Chat with AI',
    door_raise_c4: 'My Barn',
    tab_learn: 'Learn',
    tab_expert: 'Talk to an Expert',
    tab_ai: 'Chat with AI',
    tab_my_farm: 'My Farm',
    tab_my_barn: 'My Barn',
    section_learn_farm_desc: 'Build stronger harvests with practical farming guides.',
    section_learn_livestock_desc: 'Keep healthier animals with useful care guides.',
    section_expert_desc: 'Ask about real crop or animal challenges.',
    section_ai_desc: 'Get quick answers about farming and livestock, anytime.',
    section_farm_desc: 'Plan field work, record costs and follow your farm progress.',
    section_barn_desc: 'Track animal care, feeding and farm expenses.',
    section_photo_source: 'Photo source: Wikimedia Commons',
    back_home: 'Back home',
    another_topic: 'Another topic',
    ask_another: 'Ask another question…',
    btn_ask: 'Ask',
    btn_search: 'Search',
    search_crop_ph: 'Search the crop you want to grow',
    search_animal_ph: 'Search the animal you want to raise',
    tab_overview: 'Overview',
    tab_photos: 'Photos',
    tab_videos: 'Short videos',
    tab_history: 'History',
    no_history: 'No history',
    no_history_sub: 'Your search topics will appear here.',
    btn_clear_history: 'Clear history',
    preparing_details: 'Preparing details…',
    ai_disclaimer: 'This overview was prepared by AI from general agricultural knowledge; it is not a direct web search.',
    local_disclaimer: 'This is the basic guide built into the app.',
    verify_engines: 'Verify with an agricultural extension officer or livestock veterinarian and compare with these search engines:',
    searching_commons: 'Searching photos on Wikimedia Commons…',
    btn_retry: 'Try again',
    no_photos: 'No photos found',
    no_photos_sub: 'Try searching with another keyword.',
    photos_commons_note: 'Photos from Wikimedia Commons. Click source link to view licensing and author details.',
    license_label: 'License',
    videos_farmers: 'Videos from farmers',
    no_videos: 'Videos uploaded by farmers will appear here.',
    search_first_note: 'Search for a topic first to see related photos or videos.',
    expert_note: 'Choose a specialist to chat or start an in-app audio or video call.',
    btn_call: 'Call',
    btn_chat: 'Chat',
    lbl_role: 'I am joining as',
    role_note: 'Expert roles are self-declared and are not independently verified.',
    role_farmer: 'Farmer',
    role_livestock_keeper: 'Livestock keeper',
    role_crop_expert: 'Crop expert',
    role_livestock_expert: 'Livestock expert',
    no_experts: 'No specialists have registered yet.',
    expert_inbox_note: 'Your expert profile is active. Incoming conversations appear in Chat.',
    expert_online: 'Available in app',
    expert_offline: 'Offline · chat anytime',
    call_connecting: 'Connecting in app…',
    call_ringing: 'Calling in app…',
    incoming_call: 'Incoming in-app call',
    call_accept: 'Answer',
    call_decline: 'Decline',
    call_unavailable: 'This person is offline or cannot be reached right now.',
    call_media_error: 'Allow microphone or camera access to start the in-app call.',
    remote_text_only: 'Only text messages are available in expert conversations right now.',
    communications_sign_in: 'Sign in again to activate secure expert chat and calls on this account.',
    open_ai_assistant: 'Open Agro AI',
    also_chat_ai: 'You can also chat with Agro AI:',
    ai_history: 'History',
    ai_new_chat: 'New conversation',
    ai_assistant_name: 'Agro AI',
    ai_help_prompt: 'How can I help you today?',
    ai_input_ph: 'Ask any farming or livestock question…',
    ai_thinking: 'Thinking…',
    ai_sessions_title: 'Conversation History',
    no_saved_chats: 'No saved conversations yet.',
    attach_title: 'Attach',
    attach_file: 'Document (text)',
    attach_photo: 'Photos',
    attach_camera: 'Camera',
    attach_guide: 'Snap a picture of a diseased crop or animal for automated visual guidance.',
    farm_gate: 'Log in to your account to record farm or barn data, tasks, and finances.',
    btn_login_signup: 'Log in or sign up',
    tab_summary: 'Summary',
    tab_tasks: 'Tasks',
    tab_finances: 'Finances',
    tab_ai_advisor: 'AI Advisor',
    stat_tasks_left: 'Pending Tasks',
    stat_income: 'Income (TZS)',
    stat_expenses: 'Expenses (TZS)',
    stat_profit: 'Net Profit (TZS)',
    lbl_farm_name: 'Farm or barn name',
    lbl_farm_size: 'Size (acres or herd count)',
    lbl_farm_items: 'Crops or livestock',
    ph_farm_crop: 'e.g., maize, beans, sunflower',
    ph_farm_ani: 'e.g., 200 layers, 5 dairy cows',
    lbl_place: 'Location / Region',
    lbl_notes: 'Overview / Notes',
    btn_save: 'Save',
    btn_use_location: 'Use my location',
    ph_new_task: 'New task (e.g., weeding, vaccination)',
    no_tasks: 'No tasks added yet',
    no_tasks_sub: 'Add your farm or barn tasks above.',
    fin_in: 'Income',
    fin_out: 'Expense',
    ph_fin_desc: 'Description (e.g., fertilizer, egg sales)',
    no_fin: 'No financial records',
    no_fin_sub: 'Record income and expenses to track your net profit.',
    login_tab: 'Log in',
    register_tab: 'Sign up',
    login_title: 'Welcome back',
    register_title: 'Create an account',
    lbl_name: 'Full name',
    lbl_id: 'Email address',
    lbl_pw: 'Password',
    lbl_email: 'Email address',
    lbl_phone: 'Phone number',
    lbl_confirm_pw: 'Confirm password',
    lbl_new_pw: 'New password',
    forgot_password: 'Forgot password?',
    forgot_unavailable: 'Password reset service is not available right now.',
    reset_title: 'Reset your password',
    reset_account_missing: 'No matching account is stored on this device.',
    reset_success: 'Password reset. You are now logged in.',
    btn_show_pw: 'Show password',
    btn_hide_pw: 'Hide password',
    verification_code: 'Verification code',
    verification_sent_to: 'Enter the 6-digit code sent to',
    verification_sent: 'Verification code sent.',
    btn_verify_create: 'Verify code',
    btn_send_code: 'Send reset code',
    btn_reset_password: 'Reset password',
    btn_resend_code: 'Resend code',
    btn_change_details: 'Back',
    password_mismatch: 'Passwords do not match.',
    auth_contact_required: 'Enter an email address or phone number.',
    verification_failed: 'The code is incorrect or expired. Request a new code and try again.',
    verification_unavailable: 'Email/SMS verification is unavailable. Check the backend and delivery settings.',
    otp_retry_later: 'Too many requests. Wait and try again later.',
    auth_note: 'Your account and expert conversations are available across devices. Use a valid email address.',
    guest_note: 'Without an account you can browse guides, use AI, and view Stream. Chat, My Farm, and posting require an account.',
    btn_edit_profile: 'Edit profile',
    btn_new_post: 'New post',
    tab_posts: 'Content',
    tab_reposts: 'Reposts',
    tab_saved: 'Saved',
    tab_market: 'Marketplace',
    stat_posts: 'Posts',
    stat_following: 'Following',
    stat_followers: 'Followers',
    btn_unfollow: 'Unfollow',
    btn_follow_back: 'Follow back',
    follows_you: 'Follows you',
    no_followers: 'No followers yet.',
    no_following: 'Not following anyone yet.',
    btn_message: 'Message',
    no_content: 'Nothing here yet',
    no_content_sub: 'Your items will appear here.',
    btn_add_product: 'Add product',
    lbl_prod_name: 'Product name',
    ph_prod_name: 'e.g., Organic Maize',
    lbl_prod_price: 'Price (TZS)',
    lbl_prod_qty: 'Quantity',
    ph_prod_qty: 'e.g., 20 bags',
    lbl_prod_place: 'Location',
    no_products: 'No products listed',
    no_products_sub: 'List crops or livestock you are offering for sale.',
    stream_tab_you: 'For You',
    stream_tab_friends: 'Friends',
    search_stream_ph: 'Search content',
    stream_search_web: 'Search on',
    no_stream_results: 'No results found',
    no_stream_friends: 'Follow creators on "For You" to see their updates here.',
    comments_title: 'Comments',
    ph_comment: 'Write a comment…',
    share_title: 'Share',
    btn_copy_link: 'Copy link',
    toast_link_copied: 'Link copied to clipboard',
    btn_repost: 'Repost',
    toast_reposted: 'Reposted successfully',
    toast_saved: 'Saved to your profile',
    toast_liked: 'Liked',
    ct_chats: 'Chats',
    ct_calls: 'Calls',
    ct_status: 'Status',
    ct_channels: 'Channels',
    search_chats_ph: 'Search conversations',
    btn_new_chat: 'New chat',
    no_chats: 'No conversations yet',
    no_chats_sub: 'Tap the chat icon to begin a conversation.',
    ph_message: 'Type a message',
    recording_label: 'Recording',
    btn_new_call: 'New call',
    no_calls: 'No calls yet',
    lbl_my_status: 'My status',
    lbl_add_status: 'Add status',
    lbl_recent_status: 'Recent status updates',
    no_status: 'No recent status updates.',
    search_channels_ph: 'Search channels',
    btn_create_channel: 'Create',
    lbl_your_channel: 'Your channel',
    btn_follow: 'Follow',
    btn_following: 'Following',
    menu_communities: 'Communities',
    menu_new_group: 'Create group',
    menu_contacts: 'All contacts',
    menu_invite: 'Invite a friend',
    menu_blocked: 'Blocked users',
    st_title: 'Settings',
    st_lang_group: 'Language / Lugha',
    st_lang_label: 'Language',
    st_screen: 'Display',
    st_dark_mode: 'Dark mode',
    st_font_format: 'Text font',
    st_font_sans: 'Standard (Sans)',
    st_font_serif: 'Serif (Times)',
    st_font_mono: 'Monospace',
    st_text_size: 'Text size',
    st_chat_theme: 'Chat theme',
    st_chat_system: 'System (matches dark mode)',
    st_chat_dark: 'Dark mode',
    st_chat_light: 'Light mode',
    st_privacy: 'Privacy',
    st_share_bio: 'Share my bio information',
    st_allow_profile: 'Allow others to view my profile',
    st_secure_mode: 'Security mode (hide chat previews)',
    st_autodel_blocked: 'Automatically delete chats from blocked contacts',
    st_location: 'Location access',
    st_permissions: 'Permissions',
    st_perm_file: 'File access',
    st_perm_camera: 'Camera',
    st_perm_mic: 'Microphone',
    st_account: 'Account',
    st_logout: 'Log out',
    st_login: 'Log in',
    delete_account: 'Delete account',
    delete_account_note: 'This permanently deletes your account, posts, and profile data. Enter the username and email used for this account, plus your password.',
    delete_username: 'Username',
    delete_email: 'Email address used to sign up',
    delete_password: 'Password',
    delete_confirm: 'Permanently delete account',
    delete_verify_failed: 'The username, email, or password does not match this account.',
    delete_email_missing: 'No email is saved for this account. This form can only verify accounts registered with an email address.',
    delete_account_success: 'Account and its posts have been deleted.',
    toast_logged_out: 'Logged out successfully.',
    st_priv_note: 'Settings are stored locally on this device.',
    about_title: 'MIMI NI MKULIMA',
    about_desc: 'An all-in-one platform for farmers and livestock keepers: learn modern techniques, consult AI, manage your farm and barn records, connect with peers, and share knowledge through the Stream feed.',
    about_goal_title: 'Mission',
    about_goal_1: 'Empower farmers and livestock keepers with actionable agricultural knowledge in both English and Swahili.',
    about_goal_2: 'Provide immediate, expert agricultural advice powered by AI and verified extension specialists.',
    about_goal_3: 'Help farmers plan tasks, log daily income and expenses, and calculate net farm profitability.',
    about_goal_4: 'Build a collaborative community for peer-to-peer trade, expert Q&A, and agricultural streaming.',
    about_dev_title: 'Developer',
    about_dev_desc: '<b>Daxon Technology</b>, Mbeya, Tanzania.<br>Damian Daud Malunda, Founder & CEO.<br><a href="mailto:daxontech1@gmail.com">daxontech1@gmail.com</a><br><a href="https://damianmalunda.isroot.in/" target="_blank" rel="noopener noreferrer">damianmalunda.isroot.in</a>',
    about_services: 'Daxon Technology services: Software development, Graphic design, IT infrastructure, and Electronics maintenance.',
    about_version: 'Version 1.0. AI outputs provide general agricultural advice; for critical diseases and prescription medications, always consult a certified veterinarian or agricultural extension officer.',
    toast_lang_changed: 'Language set to English',
    perm_file_disabled: 'File permission is disabled in Settings.',
    perm_camera_disabled: 'Camera permission is disabled in Settings.',
    perm_mic_disabled: 'Microphone permission is disabled in Settings.',
    audio_unsupported: 'Audio recording is not supported on this browser.'
  },
  sw: {
    nav_home: 'Nyumbani',
    nav_account: 'Akaunti',
    nav_chat: 'Gumzo',
    nav_stream: 'Maudhui',
    nav_about: 'Kuhusu',
    nav_settings: 'Mipangilio',
    brand_sub: 'Lima na Fuga Pamoja',
    hello_back: 'Karibu tena',
    hello_guest: 'Karibu shambani',
    home_lede: 'Jifunze, uliza maswali, na wasiliana na wakulima na wafugaji wenzako.',
    door_grow_t: 'MKULIMA',
    door_grow_s: 'Lima Pamoja',
    door_grow_c1: 'Jifunze Kilimo',
    door_grow_c2: 'Ongea na Mtaalamu',
    door_grow_c3: 'Gumzo la AI',
    door_grow_c4: 'Shamba Langu',
    door_raise_t: 'TUFUGE',
    door_raise_s: 'Fuga Pamoja',
    door_raise_c1: 'Jifunze Mifugo',
    door_raise_c2: 'Ongea na Mtaalamu',
    door_raise_c3: 'Gumzo la AI',
    door_raise_c4: 'Banda Langu',
    tab_learn: 'Jifunze',
    tab_expert: 'Ongea na Mtaalamu',
    tab_ai: 'Gumzo la AI',
    tab_my_farm: 'Shamba Langu',
    tab_my_barn: 'Banda Langu',
    section_learn_farm_desc: 'Jifunze mbinu za vitendo za kuongeza mavuno.',
    section_learn_livestock_desc: 'Jifunze kutunza mifugo na kuimarisha afya yao.',
    section_expert_desc: 'Uliza kuhusu changamoto za mazao au mifugo.',
    section_ai_desc: 'Pata majibu ya haraka kuhusu kilimo na ufugaji.',
    section_farm_desc: 'Panga kazi, hifadhi matumizi na fuatilia shamba lako.',
    section_barn_desc: 'Fuatilia afya, chakula na matumizi ya mifugo.',
    section_photo_source: 'Chanzo cha picha: Wikimedia Commons',
    back_home: 'Rudi nyumbani',
    another_topic: 'Mada nyingine',
    ask_another: 'Uliza swali zaidi…',
    btn_ask: 'Uliza',
    btn_search: 'Tafuta',
    search_crop_ph: 'Tafuta zao unalotaka kulima',
    search_animal_ph: 'Tafuta mnyama unayemfuga',
    tab_overview: 'Maelezo',
    tab_photos: 'Picha',
    tab_videos: 'Video fupi',
    tab_history: 'Historia',
    no_history: 'Hakuna historia',
    no_history_sub: 'Mada zako za utafutaji zitaonekana hapa.',
    btn_clear_history: 'Futa historia',
    preparing_details: 'Inaandaa maelezo…',
    ai_disclaimer: 'Muhtasari huu umeandaliwa na AI kutoka maarifa ya jumla ya kilimo; si utafutaji wa moja kwa moja wa mtandao.',
    local_disclaimer: 'Huu ni mwongozo wa msingi uliopo ndani ya app.',
    verify_engines: 'Thibitisha na afisa ugani au daktari wa mifugo na linganisha na injini hizi za utafutaji:',
    searching_commons: 'Inatafuta picha kwenye Wikimedia Commons…',
    btn_retry: 'Jaribu tena',
    no_photos: 'Hakuna picha zilizopatikana',
    no_photos_sub: 'Jaribu neno jingine la kutafuta.',
    photos_commons_note: 'Picha kutoka Wikimedia Commons. Bofya chanzo kuona leseni na maelezo ya mwandishi.',
    license_label: 'Leseni',
    videos_farmers: 'Video kutoka kwa wakulima',
    no_videos: 'Video zilizopakiwa na wakulima zitaonekana hapa.',
    search_first_note: 'Tafuta mada kwanza ili uone picha au video zinazohusiana.',
    expert_note: 'Chagua mtaalamu ili kuchat au kupiga simu ya sauti/video ndani ya app.',
    btn_call: 'Piga simu',
    btn_chat: 'Chat',
    lbl_role: 'Ninajisajili kama',
    role_note: 'Nafasi za kitaalamu huchaguliwa mwenyewe na hazijathibitishwa na mfumo.',
    role_farmer: 'Mkulima',
    role_livestock_keeper: 'Mfugaji',
    role_crop_expert: 'Mtaalamu wa kilimo',
    role_livestock_expert: 'Mtaalamu wa mifugo',
    no_experts: 'Bado hakuna wataalamu waliosajiliwa.',
    expert_inbox_note: 'Wasifu wako wa mtaalamu umewezeshwa. Mazungumzo yanayoingia yataonekana kwenye Gumzo.',
    expert_online: 'Anapatikana kwenye app',
    expert_offline: 'Hayupo mtandaoni · tuma ujumbe',
    call_connecting: 'Inaunganisha ndani ya app…',
    call_ringing: 'Inapiga ndani ya app…',
    incoming_call: 'Simu inayoingia ndani ya app',
    call_accept: 'Pokea',
    call_decline: 'Kataa',
    call_unavailable: 'Mtu huyu hayupo mtandaoni au hapatikani kwa sasa.',
    call_media_error: 'Ruhusu maikrofoni au kamera ili kuanza simu ndani ya app.',
    remote_text_only: 'Kwa sasa mazungumzo na wataalamu yanatumia ujumbe wa maandishi pekee.',
    communications_sign_in: 'Ingia tena ili kuanzisha chat na simu salama za wataalamu kwenye akaunti hii.',
    open_ai_assistant: 'Fungua Agro AI',
    also_chat_ai: 'Unaweza pia kuzungumza na Agro AI:',
    ai_history: 'Historia',
    ai_new_chat: 'Mazungumzo mapya',
    ai_assistant_name: 'Agro AI',
    ai_help_prompt: 'Nikusaidie nini leo?',
    ai_input_ph: 'Andika swali lolote la kilimo au mifugo…',
    ai_thinking: 'Inafikiri…',
    ai_sessions_title: 'Historia ya Mazungumzo',
    no_saved_chats: 'Bado hakuna mazungumzo yaliyohifadhiwa.',
    attach_title: 'Ongeza',
    attach_file: 'Faili (maandishi)',
    attach_photo: 'Picha',
    attach_camera: 'Kamera',
    attach_guide: 'Piga picha ya zao au mnyama mwenye tatizo upate ushauri wa jumla.',
    farm_gate: 'Ingia kwenye akaunti ili uweke taarifa za shamba au banda lako, kazi na mahesabu.',
    btn_login_signup: 'Ingia au jisajili',
    tab_summary: 'Muhtasari',
    tab_tasks: 'Kazi',
    tab_finances: 'Fedha',
    tab_ai_advisor: 'Mshauri wa AI',
    stat_tasks_left: 'Kazi zilizobaki',
    stat_income: 'Mapato (TZS)',
    stat_expenses: 'Matumizi (TZS)',
    stat_profit: 'Faida halisi (TZS)',
    lbl_farm_name: 'Jina la shamba au banda',
    lbl_farm_size: 'Ukubwa (ekari au idadi ya mifugo)',
    lbl_farm_items: 'Mazao au mifugo',
    ph_farm_crop: 'mfano: mahindi, maharage, alizeti',
    ph_farm_ani: 'mfano: kuku 200, ng\'ombe 5 wa maziwa',
    lbl_place: 'Eneo / Mkoa',
    lbl_notes: 'Muhtasari / Maelezo',
    btn_save: 'Hifadhi',
    btn_use_location: 'Tumia eneo langu',
    ph_new_task: 'Kazi mpya (mfano: kupalilia, chanjo)',
    no_tasks: 'Hakuna kazi zilizoongezwa bado',
    no_tasks_sub: 'Ongeza kazi zako za shambani au bandani hapa juu.',
    fin_in: 'Mapato',
    fin_out: 'Matumizi',
    ph_fin_desc: 'Maelezo (mfano: mbolea, mauzo ya mayai)',
    no_fin: 'Hakuna rekodi za fedha',
    no_fin_sub: 'Andika mapato na matumizi ili kujua faida yako.',
    login_tab: 'Ingia',
    register_tab: 'Jisajili',
    login_title: 'Karibu tena',
    register_title: 'Fungua akaunti',
    lbl_name: 'Jina kamili',
    lbl_id: 'Barua pepe',
    lbl_pw: 'Nenosiri',
    lbl_email: 'Barua pepe',
    lbl_phone: 'Namba ya simu',
    lbl_confirm_pw: 'Thibitisha nenosiri',
    lbl_new_pw: 'Nenosiri jipya',
    forgot_password: 'Umesahau nenosiri?',
    forgot_unavailable: 'Huduma ya kubadili nenosiri haipatikani kwa sasa.',
    reset_title: 'Badili nenosiri',
    reset_account_missing: 'Akaunti inayolingana haipo kwenye kifaa hiki.',
    reset_success: 'Nenosiri limebadilishwa. Umeingia kwenye akaunti.',
    btn_show_pw: 'Onyesha nenosiri',
    btn_hide_pw: 'Ficha nenosiri',
    verification_code: 'Code ya uthibitisho',
    verification_sent_to: 'Andika code ya tarakimu 6 iliyotumwa kwa',
    verification_sent: 'Code ya uthibitisho imetumwa.',
    btn_verify_create: 'Thibitisha code',
    btn_send_code: 'Tuma code ya kubadili nenosiri',
    btn_reset_password: 'Badili nenosiri',
    btn_resend_code: 'Tuma code tena',
    btn_change_details: 'Rudi',
    password_mismatch: 'Nenosiri halifanani.',
    auth_contact_required: 'Weka barua pepe au namba ya simu.',
    verification_failed: 'Code si sahihi au muda wake umeisha. Omba code mpya ujaribu tena.',
    verification_unavailable: 'Uthibitisho wa email/SMS haupatikani. Kagua backend na mipangilio ya kutuma.',
    otp_retry_later: 'Maombi ni mengi sana. Subiri kisha ujaribu tena.',
    auth_note: 'Akaunti na mazungumzo yako na wataalamu vitapatikana kwenye vifaa vyako. Tumia barua pepe halali.',
    guest_note: 'Bila akaunti unaweza kujifunza, kutumia AI, na kuona Stream. Gumzo, Shamba Langu na kuchapisha vinahitaji akaunti.',
    btn_edit_profile: 'Hariri wasifu',
    btn_new_post: 'Chapisho jipya',
    tab_posts: 'Maudhui',
    tab_reposts: 'Repost',
    tab_saved: 'Zilizohifadhiwa',
    tab_market: 'Ninauza',
    stat_posts: 'Machapisho',
    stat_following: 'Unaowafuata',
    stat_followers: 'Wanaokufuata',
    btn_unfollow: 'Acha kumfuata',
    btn_follow_back: 'Fuata pia',
    follows_you: 'Anakufuata',
    no_followers: 'Bado huna wanaokufuata.',
    no_following: 'Bado humfuati mtu yeyote.',
    btn_message: 'Ujumbe',
    no_content: 'Hakuna kitu bado',
    no_content_sub: 'Vitu vyako vitaonekana hapa.',
    btn_add_product: 'Ongeza bidhaa',
    lbl_prod_name: 'Jina la bidhaa',
    ph_prod_name: 'mfano: Mahindi Safi',
    lbl_prod_price: 'Bei (TZS)',
    lbl_prod_qty: 'Kiasi',
    ph_prod_qty: 'mfano: gunia 20',
    lbl_prod_place: 'Eneo',
    no_products: 'Hakuna bidhaa',
    no_products_sub: 'Orodhesha mazao au mifugo unayouza.',
    stream_tab_you: 'Kwa Ajili Yako',
    stream_tab_friends: 'Marafiki',
    search_stream_ph: 'Tafuta maudhui',
    stream_search_web: 'Tafuta pia:',
    no_stream_results: 'Hakuna matokeo yaliyopatikana',
    no_stream_friends: 'Fuata watu kwenye "Kwa Ajili Yako" ili uone machapisho yao hapa.',
    comments_title: 'Maoni',
    ph_comment: 'Andika maoni…',
    share_title: 'Shiriki',
    btn_copy_link: 'Nakili kiungo',
    toast_link_copied: 'Kiungo kimenakiliwa',
    btn_repost: 'Repost',
    toast_reposted: 'Umerepost kikamilifu',
    toast_saved: 'Imehifadhiwa kwenye wasifu wako',
    toast_liked: 'Umependa',
    ct_chats: 'Gumzo',
    ct_calls: 'Simu',
    ct_status: 'Hali',
    ct_channels: 'Vituo',
    search_chats_ph: 'Tafuta mazungumzo',
    btn_new_chat: 'Mazungumzo mapya',
    no_chats: 'Hakuna mazungumzo bado',
    no_chats_sub: 'Bofya kitufe cha kuanzisha gumzo kuanza mazungumzo.',
    ph_message: 'Andika ujumbe',
    recording_label: 'Inarekodi',
    btn_new_call: 'Simu mpya',
    no_calls: 'Hakuna simu bado',
    lbl_my_status: 'Hali yangu',
    lbl_add_status: 'Ongeza hali',
    lbl_recent_status: 'Hali za hivi karibuni',
    no_status: 'Hakuna hali mpya.',
    search_channels_ph: 'Tafuta vituo',
    btn_create_channel: 'Unda',
    channel_yours: 'Kituo chako',
    btn_follow: 'Fuata',
    btn_following: 'Unafuata',
    menu_communities: 'Jumuiya',
    menu_new_group: 'Unda kundi',
    menu_contacts: 'Anwani zote',
    menu_invite: 'Alika rafiki',
    menu_blocked: 'Watumiaji waliozuiwa',
    st_title: 'Mipangilio',
    st_lang_group: 'Lugha / Language',
    st_lang_label: 'Lugha',
    st_screen: 'Skrini',
    st_dark_mode: 'Mandhari meusi',
    st_font_format: 'Aina ya maandishi',
    st_font_sans: 'Kawaida (Sans)',
    st_font_serif: 'Serif (Times)',
    st_font_mono: 'Monospace',
    st_text_size: 'Ukubwa wa maandishi',
    st_chat_theme: 'Mandhari ya gumzo',
    st_chat_system: 'Mfumo (kufuata giza/mwanga)',
    st_chat_dark: 'Mandhari meusi',
    st_chat_light: 'Mandhari meupe',
    st_privacy: 'Faragha',
    st_share_bio: 'Shiriki maelezo yangu (bio)',
    st_allow_profile: 'Ruhusu wengine waone wasifu wangu',
    st_secure_mode: 'Hali salama (ficha muhtasari wa ujumbe)',
    st_autodel_blocked: 'Futa kiotomatiki mazungumzo ya waliozuiwa',
    st_location: 'Ruhusa ya eneo (Location)',
    st_permissions: 'Ruhusa za Kifaa',
    st_perm_file: 'Ufikiaji wa faili',
    st_perm_camera: 'Kamera',
    st_perm_mic: 'Maikrofoni',
    st_account: 'Akaunti',
    st_logout: 'Ondoka',
    st_login: 'Ingia',
    delete_account: 'Futa akaunti',
    delete_account_note: 'Akaunti yako, machapisho na taarifa za wasifu zitafutwa kabisa. Weka jina la mtumiaji na email ulizotumia kujisajili, pamoja na password yako.',
    delete_username: 'Jina la mtumiaji',
    delete_email: 'Anwani ya email uliyotumia kujisajili',
    delete_password: 'Password',
    delete_confirm: 'Futa akaunti kabisa',
    delete_verify_failed: 'Jina la mtumiaji, email au password hailingani na akaunti hii.',
    delete_email_missing: 'Email haijahifadhiwa kwenye akaunti hii. Fomu hii inaweza kuthibitisha akaunti zilizosajiliwa kwa email pekee.',
    delete_account_success: 'Akaunti na machapisho yake yamefutwa.',
    toast_logged_out: 'Umetoka kwenye akaunti.',
    st_priv_note: 'Mipangilio yote inahifadhiwa kwenye kifaa hiki tu.',
    about_title: 'MIMI NI MKULIMA',
    about_desc: 'App ya pamoja ya wakulima na wafugaji: jifunze mbinu za kisasa, uliza AI, simamia kumbukumbu za shamba na banda lako, zungumza na wenzako, na shiriki maarifa kupitia Stream.',
    about_goal_title: 'Lengo Letu',
    about_goal_1: 'Kuwapa wakulima na wafugaji maarifa bora ya kilimo na ufugaji kwa lugha rahisi ya Kiswahili na Kiingereza.',
    about_goal_2: 'Kutoa ushauri wa haraka na sahihi kupitia msaidizi wa AI na wataalamu wa mifugo na kilimo.',
    about_goal_3: 'Kusaidia kupanga kazi za shambani, kurekodi mapato na matumizi ya kila siku, na kuhesabu faida halisi.',
    about_goal_4: 'Kuunganisha jamii ya wakulima na wafugaji kwa biashara, msaada, na ushirikiano.',
    about_dev_title: 'Msanidi Programu',
    about_dev_desc: '<b>Daxon Technology</b>, Mbeya, Tanzania.<br>Damian Daud Malunda, Mwanzilishi na Mkurugenzi Mkuu.<br><a href="mailto:daxontech1@gmail.com">daxontech1@gmail.com</a><br><a href="https://damianmalunda.isroot.in/" target="_blank" rel="noopener noreferrer">damianmalunda.isroot.in</a>',
    about_services: 'Huduma za Daxon Technology: Uundaji wa programu, Usanifu wa picha (graphic design), Msaada wa IT, na Matengenezo ya vifaa vya elektroniki.',
    about_version: 'Toleo 1.0. Majibu ya AI ni ya ushauri wa jumla; kwa magonjwa makali na dawa zilizoidhinishwa, wasiliana na daktari wa mifugo au afisa ugani.',
    toast_lang_changed: 'Lugha imebadilishwa kuwa Kiswahili',
    perm_file_disabled: 'Ruhusa ya faili imezimwa kwenye Mipangilio.',
    perm_camera_disabled: 'Ruhusa ya kamera imezimwa kwenye Mipangilio.',
    perm_mic_disabled: 'Ruhusa ya maikrofoni imezimwa kwenye Mipangilio.',
    audio_unsupported: 'Kurekodi sauti hakupatikani kwenye kivinjari hiki.'
  },
  fr: {
    nav_home: 'Accueil',
    nav_account: 'Compte',
    nav_chat: 'Discussion',
    nav_stream: 'Stream',
    nav_about: 'À propos',
    nav_settings: 'Paramètres',
    brand_sub: 'Cultiver et Élever Ensemble',
    hello_back: 'Bon retour',
    hello_guest: 'Bienvenue à la ferme',
    home_lede: 'Apprenez, posez des questions et connectez-vous avec les agriculteurs et éleveurs.',
    door_grow_t: 'AGRICULTURE',
    door_grow_s: 'Cultiver Ensemble',
    door_grow_c1: 'Apprendre l’Agriculture',
    door_grow_c2: 'Parler à un Expert',
    door_grow_c3: 'Discuter avec l’IA',
    door_grow_c4: 'Ma Ferme',
    door_raise_t: 'ÉLEVAGE',
    door_raise_s: 'Élever Ensemble',
    door_raise_c1: 'Apprendre l’Élevage',
    door_raise_c2: 'Parler à un Expert',
    door_raise_c3: 'Discuter avec l’IA',
    door_raise_c4: 'Mon Étable',
    tab_learn: 'Apprendre',
    tab_expert: 'Parler à un Expert',
    tab_ai: 'Agro IA',
    tab_my_farm: 'Ma Ferme',
    tab_my_barn: 'Mon Étable',
    tab_tasks: 'Tâches',
    btn_login_signup: 'Connexion / Inscription',
    st_title: 'Paramètres',
    st_lang_group: 'Langue / Language',
    st_lang_label: 'Langue de l’application',
    st_dark_mode: 'Mode Sombre',
    st_logout: 'Déconnexion',
    toast_lang_changed: 'Langue changée avec succès !'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_account: 'الحساب',
    nav_chat: 'المحادثة',
    nav_stream: 'البث',
    nav_about: 'حول التطبيق',
    nav_settings: 'الإعدادات',
    brand_sub: 'نزرع ونربي معاً',
    hello_back: 'مرحباً بعودتك',
    hello_guest: 'مرحباً بك في المزرعة',
    home_lede: 'تعلم، اسأل، وتواصل مع المزارعين ومربي الماشية.',
    door_grow_t: 'الزراعة',
    door_grow_s: 'نزرع معاً',
    door_grow_c1: 'تعلم الزراعة',
    door_grow_c2: 'تحدث مع خبير',
    door_grow_c3: 'الدردشة مع الذكاء الاصطناعي',
    door_grow_c4: 'مزرعتي',
    door_raise_t: 'الثروة الحيوانية',
    door_raise_s: 'نربي معاً',
    door_raise_c1: 'تعلم تربية الماشية',
    door_raise_c2: 'تحدث مع خبير',
    door_raise_c3: 'الدردشة مع الذكاء الاصطناعي',
    door_raise_c4: 'حظيرتي',
    tab_learn: 'تعلم',
    tab_expert: 'تحدث مع خبير',
    tab_ai: 'الذكاء الاصطناعي الزراعي',
    tab_my_farm: 'مزرعتي',
    tab_my_barn: 'حظيرتي',
    tab_tasks: 'المهام',
    btn_login_signup: 'تسجيل الدخول / إنشاء حساب',
    st_title: 'الإعدادات',
    st_lang_group: 'اللغة',
    st_lang_label: 'لغة التطبيق',
    st_dark_mode: 'الوضع الليلي',
    st_logout: 'تسجيل الخروج',
    toast_lang_changed: 'تم تغيير اللغة بنجاح!'
  },
  es: {
    nav_home: 'Inicio',
    nav_account: 'Cuenta',
    nav_chat: 'Chat',
    nav_stream: 'Stream',
    nav_about: 'Acerca de',
    nav_settings: 'Ajustes',
    brand_sub: 'Cultivar y Criar Juntos',
    hello_back: 'Bienvenido de nuevo',
    hello_guest: 'Bienvenido a la granja',
    home_lede: 'Aprende, haz preguntas y conéctate con agricultores y ganaderos.',
    door_grow_t: 'AGRICULTURA',
    door_grow_s: 'Cultivar Juntos',
    door_grow_c1: 'Aprender Agricultura',
    door_grow_c2: 'Hablar con un Experto',
    door_grow_c3: 'Chatear con IA',
    door_grow_c4: 'Mi Granja',
    door_raise_t: 'GANADERÍA',
    door_raise_s: 'Criar Juntos',
    door_raise_c1: 'Aprender Ganadería',
    door_raise_c2: 'Hablar con un Experto',
    door_raise_c3: 'Chatear con IA',
    door_raise_c4: 'Mi Establo',
    tab_learn: 'Aprender',
    tab_expert: 'Hablar con Experto',
    tab_ai: 'Agro IA',
    tab_my_farm: 'Mi Granja',
    tab_my_barn: 'Mi Establo',
    tab_tasks: 'Tareas',
    btn_login_signup: 'Iniciar sesión / Registro',
    st_title: 'Ajustes',
    st_lang_group: 'Idioma',
    st_lang_label: 'Idioma de la aplicación',
    st_dark_mode: 'Modo Oscuro',
    st_logout: 'Cerrar sesión',
    toast_lang_changed: '¡Idioma cambiado con éxito!'
  },
  pt: {
    nav_home: 'Início',
    nav_account: 'Conta',
    nav_chat: 'Chat',
    nav_stream: 'Stream',
    nav_about: 'Sobre',
    nav_settings: 'Configurações',
    brand_sub: 'Cultivar e Criar Juntos',
    hello_back: 'Bem-vindo de volta',
    hello_guest: 'Bem-vindo à fazenda',
    home_lede: 'Aprenda, tire dúvidas e conecte-se com agricultores e pecuaristas.',
    door_grow_t: 'AGRICULTURA',
    door_grow_s: 'Cultivar Juntos',
    door_grow_c1: 'Aprender Agricultura',
    door_grow_c2: 'Falar com Especialista',
    door_grow_c3: 'Conversar com IA',
    door_grow_c4: 'Minha Fazenda',
    door_raise_t: 'PECUÁRIA',
    door_raise_s: 'Criar Juntos',
    door_raise_c1: 'Aprender Pecuária',
    door_raise_c2: 'Falar com Especialista',
    door_raise_c3: 'Conversar com IA',
    door_raise_c4: 'Meu Celeiro',
    tab_learn: 'Aprender',
    tab_expert: 'Falar com Especialista',
    tab_ai: 'Agro IA',
    tab_my_farm: 'Minha Fazenda',
    tab_my_barn: 'Meu Celeiro',
    tab_tasks: 'Tarefas',
    btn_login_signup: 'Entrar / Cadastrar',
    st_title: 'Configurações',
    st_lang_group: 'Idioma',
    st_lang_label: 'Idioma do aplicativo',
    st_dark_mode: 'Modo Escuro',
    st_logout: 'Sair da conta',
    toast_lang_changed: 'Idioma alterado com sucesso!'
  },
  de: {
    nav_home: 'Startseite',
    nav_account: 'Konto',
    nav_chat: 'Chat',
    nav_stream: 'Stream',
    nav_about: 'Über uns',
    nav_settings: 'Einstellungen',
    brand_sub: 'Gemeinsam Anbauen & Aufziehen',
    hello_back: 'Willkommen zurück',
    hello_guest: 'Willkommen auf dem Bauernhof',
    home_lede: 'Lernen, Fragen stellen und mit Landwirten und Tierhaltern vernetzen.',
    door_grow_t: 'LANDWIRTSCHAFT',
    door_grow_s: 'Gemeinsam Anbauen',
    door_grow_c1: 'Landwirtschaft Lernen',
    door_grow_c2: 'Mit Experten Sprechen',
    door_grow_c3: 'Mit KI Chatten',
    door_grow_c4: 'Mein Hof',
    door_raise_t: 'TIERHALTUNG',
    door_raise_s: 'Gemeinsam Aufziehen',
    door_raise_c1: 'Tierhaltung Lernen',
    door_raise_c2: 'Mit Experten Sprechen',
    door_raise_c3: 'Mit KI Chatten',
    door_raise_c4: 'Mein Stall',
    tab_learn: 'Lernen',
    tab_expert: 'Experte Fragen',
    tab_ai: 'Agro KI',
    tab_my_farm: 'Mein Hof',
    tab_my_barn: 'Mein Stall',
    tab_tasks: 'Aufgaben',
    btn_login_signup: 'Anmelden / Registrieren',
    st_title: 'Einstellungen',
    st_lang_group: 'Sprache',
    st_lang_label: 'App-Sprache',
    st_dark_mode: 'Dunkelmodus',
    st_logout: 'Abmelden',
    toast_lang_changed: 'Sprache erfolgreich geändert!'
  }
};

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'sw', name: 'Kiswahili', native: 'Kiswahili', flag: '🇹🇿' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' }
];

/* ============ helpers ============ */
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=p=>(p||'i')+Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-4);
const ic=(n,c)=>`<svg class="ic ${c||''}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const now=()=>Date.now();
const hhmm=t=>new Date(t).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
const curLang=()=>(DB && DB.settings && DB.settings.lang)||'en';
const t=(k,fallback)=>{const l=curLang();return(I18N[l]&&I18N[l][k])||(I18N.en&&I18N.en[k])||fallback||k};
const ago=t=>{const s=(now()-t)/1000,isEn=curLang()==='en';if(s<60)return isEn?'just now':'hivi punde';if(s<3600)return Math.floor(s/60)+(isEn?' min ago':' dakika');if(s<86400)return Math.floor(s/3600)+(isEn?' hr ago':' saa');return Math.floor(s/86400)+(isEn?' day ago':' siku')};
const money=n=>Number(n||0).toLocaleString('en-US');
const COLORS=['#84cc16','#e8a84c','#5eb8a1','#e0806a','#8fa8e0','#c58ad9','#d6c85a'];
const colorOf=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))>>>0;return COLORS[h%COLORS.length]};
const initials=n=>String(n).replace(/\(.*?\)/g,'').trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase()||'?';
const av=(name,cls,color)=>`<span class="av ${cls||''}" style="--c:${color||colorOf(name)}">${esc(initials(name))}</span>`;
const safeSrc=s=>typeof s==='string'&&/^(data:image\/|data:audio\/|data:video\/|blob:|\/Assets\/|\/assets\/|\.\/Assets\/|https?:\/\/)/.test(s)?s:'';
let toastT;
function toast(m){const el=$('#toast');if(!el)return;el.textContent=m;el.classList.remove('hidden');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.add('hidden'),2800)}
function sheet(title,html){closeSheet();const el=document.createElement('div');el.className='scrim';el.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><h3><span>${esc(title)}</span><button class="icon-btn" data-act="closeSheet" aria-label="Close">${ic('x')}</button></h3>${html}</div>`;el.addEventListener('mousedown',e=>{if(e.target===el)closeSheet()});$('#layer').appendChild(el);const f=el.querySelector('input:not([type=checkbox]),textarea,select');if(f&&matchMedia('(hover:hover)').matches)f.focus();return el}
function closeSheet(){const l=$('#layer');if(l)l.innerHTML=''}
async function copyText(txt){try{await navigator.clipboard.writeText(txt);return true}catch(e){try{const a=document.createElement('textarea');a.value=txt;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();const ok=document.execCommand('copy');a.remove();return ok}catch(e2){return false}}}
function imgToData(file,max=900,q=.72){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,max/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*k));c.height=Math.max(1,Math.round(im.height*k));const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};im.onerror=rej;im.src=r.result};r.onerror=rej;r.readAsDataURL(file)})}
function pickFile(accept,capture){return new Promise(res=>{const i=document.createElement('input');i.type='file';i.accept=accept||'';if(capture)i.setAttribute('capture',capture);i.onchange=()=>res(i.files&&i.files[0]||null);i.addEventListener('cancel',()=>res(null));i.click()})}
async function sha(txt){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(txt));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=5381;for(const c of txt)h=((h<<5)+h+c.charCodeAt(0))>>>0;return'x'+h.toString(16)}}
function md(src){
  const inline=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/(^|[\s(])_(.+?)_(?=[\s).,;:!?]|$)/g,'$1<i>$2</i>');
  let out='',list=null;const close=()=>{if(list){out+=`</${list}>`;list=null}};
  for(const raw of String(src).replace(/\r/g,'').split('\n')){
    const l=raw.trimEnd();let m;
    if(!l.trim()){close();continue}
    if(m=l.match(/^#{1,4}\s+(.*)/)){close();out+=`<h4>${inline(m[1])}</h4>`;continue}
    if(m=l.match(/^\s*[-*•]\s+(.*)/)){if(list!=='ul'){close();out+='<ul>';list='ul'}out+=`<li>${inline(m[1])}</li>`;continue}
    if(m=l.match(/^\s*\d+[.)]\s+(.*)/)){if(list!=='ol'){close();out+='<ol>';list='ol'}out+=`<li>${inline(m[1])}</li>`;continue}
    close();
    if(m=l.match(/^\*\*([^*]+)\*\*:?$/)){out+=`<h4>${inline(m[1])}</h4>`;continue}
    out+=`<p>${inline(l)}</p>`;
  }
  close();return out;
}

/* ============ content ============ */
const SEC={
  kilimo:{title:'Grow Together',sub:'Farming',learn:'Learn Farming',mine:'My Farm',ai:'kilimo',my:'shamba',
    topics:['How to grow maize','How to grow rice','How to grow potatoes','How to grow tomatoes','How to grow beans','How to grow sunflower'],
    topics_sw:['Jinsi ya kulima mahindi','Jinsi ya kulima mpunga','Jinsi ya kulima viazi','Jinsi ya kulima nyanya','Jinsi ya kulima maharage','Jinsi ya kulima alizeti'],
    sugs:['Which fertilizer is best for maize?','How can I identify tomato diseases?','When is the best season to plant beans?','How can I store harvests without spoilage?'],
    sugs_sw:['Mbolea ipi inafaa kwa mahindi?','Nawezaje kutambua magonjwa ya nyanya?','Msimu gani ni bora kupanda maharage?','Nawezaje kuhifadhi mavuno bila kuharibika?'],
    kw:['crop','zao','farming','kilimo','farm','shamba','seed','mbegu']},
  ufugaji:{title:'Raise Together',sub:'Livestock',learn:'Learn Livestock',mine:'My Barn',ai:'ufugaji',my:'banda',
    topics:['How to raise chickens','How to raise dairy cattle','How to raise pigs','How to raise goats','How to raise fish','How to raise sheep'],
    topics_sw:['Jinsi ya kufuga kuku','Jinsi ya kufuga ng\'ombe wa maziwa','Jinsi ya kufuga nguruwe','Jinsi ya kufuga mbuzi','Jinsi ya kufuga samaki','Jinsi ya kufuga kondoo'],
    sugs:['What is the vaccination schedule for chickens?','How can I increase cow milk production?','How should I build a good pig shelter?','My goat is sick, what should I do?'],
    sugs_sw:['Ratiba ya chanjo ya kuku ni ipi?','Nawezaje kuongeza maziwa ya ng\'ombe?','Banda bora la nguruwe liweje?','Mbuzi wangu anaumwa, nifanye nini?']}
};

const GUIDES=[
{kw:['mahindi','maize','corn'],title:'How to grow maize',title_sw:'Jinsi ya kulima mahindi',
 body:`**Land Preparation**
- Till early before the rains start and clear all weeds. Choose well-draining loam or sandy loam soil (pH 5.5–7.0).
**Planting**
- Use certified hybrid or OPV seeds suitable for your agro-ecological altitude.
- Plant at onset of steady rains. Standard spacing: 75 cm between rows and 25–30 cm between holes, 1 seed per hole.
**Fertilizer Application**
- Basal at planting: DAP or NPK (approx. 50 kg per acre).
- Top-dressing at 4–6 weeks (knee-high): CAN or Urea (approx. 50 kg per acre).
**Weeding & Pest Control**
- Weed twice: at 2–3 weeks and 5–6 weeks.
- Scout weekly for fall armyworm (FAW); spray approved pesticides early when larvae are small.
**Harvest & Storage**
- Harvest once the grain moisture drops below 20%. Dry thoroughly on tarpaulins to ~13% moisture before bagging in hermetic bags to prevent weevils and aflatoxin contamination.`,
 body_sw:`**Maandalizi ya shamba**
- Lima mapema kabla ya mvua na ondoa magugu. Chagua eneo lisilotuamisha maji (pH 5.5–7.0).
**Kupanda**
- Tumia mbegu bora zilizothibitishwa zinazofaa ukanda wako. Nafasi ya kawaida: sm 75 kati ya mistari na sm 25–30 kati ya mashimo, mbegu 1 kwa shimo.
**Mbolea**
- Wakati wa kupanda: DAP au NPK (takriban kg 50 kwa ekari).
- Kukuzia wiki 4–6 baada ya kuota: CAN au Urea (takriban kg 50 kwa ekari).
**Palizi na Wadudu**
- Palilia mara 2: wiki 2–3 na wiki 5–6. Kagua viwavijeshi kila wiki.
**Kuvuna na Kuhifadhi**
- Vuna yakikauka; kausha hadi unyevu ufikie ~13% kisha hifadhi kwenye magunia salama yasiyoingiza hewa.`},

{kw:['mpunga','mchele','rice','paddy'],title:'How to grow rice',title_sw:'Jinsi ya kulima mpunga',
 body:`**Preparation**
- Select lowland or irrigated fields capable of water retention. Level and harrow the field thoroughly for uniform water distribution.
**Planting**
- Direct seeding or nursery transplanting (3–4 week seedlings). Row planting at 20 x 20 cm spacing boosts yield and simplifies weeding.
**Water & Nutrients**
- Maintain shallow standing water (~5 cm) during tillering and flowering. Drain 2 weeks prior to harvest.
- Apply basal phosphate fertilizers and top-dress nitrogen in split applications.
**Harvest**
- Harvest when 80–85% of panicles turn golden yellow. Thresh and sun-dry grain immediately to 12–14% moisture.`,
 body_sw:`**Maandalizi**
- Chagua shamba linaloweza kushika maji. Lima na sawazisha ardhi ili maji yasambae sawasawa.
**Kupanda**
- Panda moja kwa moja au pandikiza miche ya wiki 3–4 kwa mistari (sm 20 × 20).
**Maji na Mbolea**
- Weka kina cha maji cha sm 5 wakati mpunga unakua; ondoa maji wiki mbili kabla ya kuvuna.
**Kuvuna**
- Vuna punje zikigeuka rangi ya dhahabu (80–85%), kausha vizuri kabla ya kuhifadhi.`},

{kw:['viazi','potato','potatoes'],title:'How to grow potatoes',title_sw:'Jinsi ya kulima viazi mviringo',
 body:`**Certified Seed**
- Use disease-free certified sprouted seed tubers (size 35–55 mm). Avoid table potatoes from open markets.
**Planting**
- Plant in loose, fertile, well-drained soil at 10 cm depth. Spacing: 75 cm between rows and 30 cm between tubers.
**Hilling & Care**
- Earth up (hill) soil around the stems 3–4 weeks after emergence to protect growing tubers from sunlight and tuber moths.
- Scout for late blight, particularly in cool, moist conditions. Apply preventative copper-based fungicides.
**Harvest**
- Mature in 90–120 days. De-haulm (cut foliage) 10 days before harvesting to harden potato skins.`,
 body_sw:`**Mbegu Bora**
- Tumia mbegu safi zilizothibitishwa, zenye machipukizi mazuri.
**Kupanda**
- Udongo uwe tifutifu; kina sm 10, nafasi sm 75 × 30.
**Kutifulia na Matunzo**
- Pandisha udongo kwenye shina wiki 3–4 baada ya kuota ili viazi visipate jua na kuwa vya kijani.
- Dhibiti ukungu (late blight) mapema. Vuna baada ya miezi 3–4.`},

{kw:['nyanya','tomato','tomatoes'],title:'How to grow tomatoes',title_sw:'Jinsi ya kulima nyanya',
 body:`**Nursery & Transplanting**
- Sow seeds in a shaded, well-aerated nursery bed. Transplant healthy 3–4 week old seedlings in the late afternoon.
**Spacing & Staking**
- Space 60–75 cm between rows and 40–50 cm between plants. Stake upright and prune suckers to encourage airflow.
**Irrigation & Nutrition**
- Use drip irrigation for consistent moisture. Inconsistent watering causes blossom-end rot and fruit cracking. Apply balanced NPK with calcium.
**Pest Management**
- Monitor for Tuta absoluta (leafminer) and fungal blights. Spray systemic or contact solutions adhering strictly to harvest intervals.`,
 body_sw:`**Kitalu na Kupandikiza**
- Oteshea mbegu kwenye kitalu; pandikiza miche wiki 3–4 wakati wa jioni.
**Nafasi na Kufunga Miti**
- Nafasi: sm 60–75 kati ya mistari na sm 40–50 kati ya mimea. Funga miti kusaidia mashina.
**Maji na Magonjwa**
- Mwagilia kwa ratiba thabiti ili kuzuia nyanya kupasuka. Kagua wadudu kama Tuta absoluta na ukungu.`},

{kw:['maharage','beans','bean'],title:'How to grow beans',title_sw:'Jinsi ya kulima maharage',
 body:`**Planting**
- Plant certified seeds in free-draining soil at 3–5 cm depth. Spacing: 50 cm between rows and 10–20 cm within rows.
**Care & Soil Health**
- Weed early at 2 and 4 weeks. Beans fix atmospheric nitrogen; apply phosphorus fertilizers (DAP/TSP) at planting.
**Pest Control & Harvest**
- Scout for bean stem maggot, aphids, and anthracnose.
- Harvest when pods turn dry, crisp, and straw-colored. Store in airtight hermetic bags to prevent bruchid beetle infestation.`,
 body_sw:`**Kupanda**
- Panda mbegu bora kwenye udongo usiotuamisha maji; kina sm 3–5, nafasi sm 50 × 10–20.
**Palizi na Mbolea**
- Palilia wiki ya 2 na ya 4. Maharage hutengeneza naitrojeni ardhini; weka mbolea ya fosforasi.
**Kuvuna**
- Vuna maganda yakikauka vizuri, kisha hifadhi kwenye vyombo visivyoingiza hewa kuzuia wadudu.`},

{kw:['alizeti','sunflower','sunflowers'],title:'How to grow sunflower',title_sw:'Jinsi ya kulima alizeti',
 body:`**Planting**
- Plant at onset of rains in well-draining soil with full sun exposure. Spacing: 75 cm between rows, 30 cm between plants.
**Care**
- Weed early during the first 4 weeks. Sunflowers are drought-tolerant once established.
**Harvest**
- Harvest when the back of the flower heads turns golden brown and seeds loosen easily. Sun-dry heads before threshing for commercial oil pressing.`,
 body_sw:`**Kupanda**
- Panda mbegu bora mwanzoni mwa mvua; nafasi sm 75 kati ya mistari na sm 30 kati ya mimea.
**Matunzo na Uvunaji**
- Palilia mapema; alizeti inastahimili ukame ikishashika mizizi. Vuna vichwa vinapogeuka rangi ya kahawia nyuma.`},

{kw:['kuku','chicken','chickens','poultry','broiler','layer'],title:'How to raise chickens',title_sw:'Jinsi ya kufuga kuku',
 body:`**Housing & Hygiene**
- Clean, well-ventilated coop with predator-proof mesh. Standard floor density: 4–5 birds per square meter for layers.
**Brooding Chicks**
- Week 1 requires constant 32–35°C temperature, clean drinkers, and chick starter crumbs.
**Vaccination & Health**
- Follow an established vaccine schedule: Marek\'s, Newcastle Disease (ND), Gumboro (IBD), and Fowl Pox. Isolate sick birds immediately.`,
 body_sw:`**Banda na Usafi**
- Banda safi, lenye hewa ya kutosha na salama dhidi ya wanyama waharibifu. Kuku 4–5 kwa mita ya mraba kwa wa mayai.
**Vifaranga**
- Wiki ya kwanza wanahitaji joto la 32–35°C, maji safi na chakula cha vifaranga kila wakati.
**Chanjo na Afya**
- Fuata ratiba ya chanjo: Kideri (Newcastle), Gumboro na Ndui ya kuku. Tenga kuku wagonjwa mara moja.`},

{kw:['ng\'ombe','ngombe','cow','cows','dairy','cattle'],title:'How to raise dairy cattle',title_sw:'Jinsi ya kufuga ng\'ombe wa maziwa',
 body:`**Housing & Comfort**
- Grooved, non-slip concrete floor, shaded cubicles, and clean dry bedding. Maintain hygiene to eliminate mastitis risks.
**Nutrition & Water**
- High-yielding dairy cows require 50–80+ liters of fresh water daily. Provide quality fodder (Napier grass, silage, desmodium) with balanced dairy meal and mineral licks.
**Health & Production**
- Dip or spray weekly with acaricides to prevent tick-borne diseases like East Coast Fever (ECF). Deworm every 3–4 months.`,
 body_sw:`**Banda na Usafi**
- Sakafu isiyoteleza, kivuli, na mfumo mzuri wa kuondoa mkojo na mavi. Osha kiwele kabla ya kukamua.
**Maji na Lishe**
- Ng'ombe wa maziwa huhitaji lita 50–80+ za maji safi kila siku. Mpe malisho bora (nyasi za Napier, pumba, madini).
**Afya**
- Osha kwa dawa ya kupe kila wiki kuzuia ndigana kali (ECF). Fuata ratiba ya chanjo na dawa za minyoo.`},

{kw:['nguruwe','pig','pigs','swine'],title:'How to raise pigs',title_sw:'Jinsi ya kufuga nguruwe',
 body:`**Pen Design**
- Well-ventilated, dry pens with concrete floors divided into feeding, sleeping, and dunging areas.
**Nutrition & Fresh Water**
- Feed age-balanced rations (piglet starter, grower, sow meal) and provide unlimited clean water through nipple drinkers.
**Biosecurity**
- African Swine Fever (ASF) has no cure or vaccine. Enforce strict biosecurity: disinfectant footbaths, restricted visitor access, and secure perimeter fencing.`,
 body_sw:`**Banda**
- Banda safi, lenye hewa na sakafu ya saruji iliyogawanywa sehemu ya kulia, kulala na choo.
**Chakula na Maji**
- Chakula chenye virutubisho kulingana na umri na maji safi ya kutosha kila wakati.
**Usalama wa Viumbe (Biosecurity)**
- Homa ya nguruwe ya Afrika (ASF) haina chanjo; zuia wageni, tumia dawa ya viatu getini na nunua mifugo toka vyanzo salama.`},

{kw:['mbuzi','goat','goats'],title:'How to raise goats',title_sw:'Jinsi ya kufuga mbuzi',
 body:`**Housing**
- Elevated, slatted wooden floor housing that stays dry and protects goats from cold drafts and moisture.
**Feeding & Forage**
- Provide diverse browse, legume foliage, acacia leaves, grass hay, and continuous mineral salt blocks.
**Health Management**
- Regular deworming, hoof trimming, and tick inspection. Keep goat pens dry to prevent foot rot and pneumonia.`,
 body_sw:`**Banda**
- Banda lililoinuliwa kutoka ardhini lenye sakafu ya mbao zenye nafasi; mbuzi hawapendi unyevu.
**Lishe**
- Majani mchanganyiko ya miti, nyasi kavu, na madini. Maji safi kila siku.
**Afya**
- Dhibiti minyoo na kupe kwa ushauri wa daktari. Kagua kwato na macho mara kwa mara.`}
];

function localGuide(q){
  const s=String(q).toLowerCase(),isSw=curLang()==='sw';
  const g=GUIDES.find(g=>g.kw.some(k=>s.includes(k)));
  if(!g)return null;
  const title=isSw?(g.title_sw||g.title):g.title;
  const body=isSw?(g.body_sw||g.body):g.body;
  const note=isSw
    ?'_Huu ni mwongozo wa msingi uliopo ndani ya app. Kwa ushauri wa kina wasiliana na afisa ugani au daktari wa mifugo._'
    :'_This is the built-in quick guide. For specialized inquiries, please consult an agricultural extension officer or veterinarian._';
  return `**${title}**\n\n${body}\n\n${note}`;
}

const BGS=['linear-gradient(160deg,#20502c,#0d2415)','linear-gradient(160deg,#5a4413,#1d160a)','linear-gradient(160deg,#2c5a33,#557a1c)','linear-gradient(160deg,#4a3021,#171009)','linear-gradient(160deg,#1e4a45,#0c1d1b)'];
const RETIRED_SEED_USERS=new Set(['s1','s2','s3','s4']);
const RETIRED_DEMO_CONTACTS=new Set(['x1','x2','x3','x4']);
const SEED_CONTACTS=[
 {id:'ai',name:'Agro AI',role:'AI Agricultural & Livestock Advisor',ai:true,online:true}
];
const SEED_CHANNELS=[
 {
   id:'ch_mimi_official',
   name:'MIMI NI MKULIMA',
   desc:'Kituo Rasmi: Mwongozo na Maelekezo ya Kutumia App ya MIMI NI MKULIMA',
   posts:[
     {
       id:'p1',
       text:'🌱 Karibu MIMI NI MKULIMA!\nHuu ni mtandao wako wa kitaalamu na kijamii ulioundwa maalum kuwawezesha wakulima na wafugaji wote. Hapa unaweza kujifunza mbinu bora, kuungana na wakulima wengine, kutangaza mazao yako, na kupata ushauri wa haraka kutoka kwa Agro AI.',
       ago:1000
     },
     {
       id:'p2',
       text:'🤖 Jinsi ya Kutumia Agro AI:\nNenda kwenye kichupo cha "Mtaalamu / AI" au fungua chat ya "Agro AI". Unaweza kuandika swali lolote la kilimo au mifugo, kutuma picha za mazao/mifugo, video za shamba, sauti (voice notes), au nyaraka (PDF, Word, PowerPoint, Excel) na Agro AI itakuchambulia papo hapo kwa Kiswahili au Kiingereza.',
       ago:2000
     },
     {
       id:'p3',
       text:'🎬 Jinsi ya Kutumia Agro Studio Pro:\nUnapopakia video au picha (Stream), studio yetu ya Agro Studio Pro inakuruhusu kukata video hadi dakika 10, kuweka maneno ya juu (subtitles), vibandiko vya mazao, vichujio (filters), na VFX. Ukibofya "Export", utapata skrini ya "Review" kuhakiki kazi yako kabla ya kuchapisha!',
       ago:3000
     },
     {
       id:'p4',
       text:'💬 Mazungumzo & Simu (Chat & Calls):\nUnaweza kuchat na wakulima wengine kwa ujumbe wa maandishi, voice notes, video notes za mduara (circular video notes), stika na emojis, pamoja na kuweka reactions kwenye jumbe. Pia unaweza kupiga simu za sauti (Voice Call) au video (Video Call) moja kwa moja.',
       ago:4000
     },
     {
       id:'p5',
       text:'📸 Jinsi ya Kutumia Hali (WhatsApp Status):\nWeka picha au video fupi (hadi sekunde 30) za shughuli zako za shamba au banda. Status hudumu kwa masaa 24. Unaweza kuona idadi na orodha ya walioangalia status yako (Views), na kuifuta wakati wowote ukitaka.',
       ago:5000
     },
     {
       id:'p6',
       text:'🛡️ Vigezo vya Kubadilisha Jina la Mtumiaji (Username):\nAkaunti inatakiwa iwe imekaa angalau miezi 6 tangu kusajiliwa na iwe imekuwa active kwa wiki 2 mfululizo kabla ya kuomba kubadilisha. Nambari ya uthibitisho itatumwa kwenye barua pepe yako rasmi.',
       ago:6000
     }
   ]
 }
];
const SEED_COMM=[
 {id:'cm1',name:'Maize Farmers Forum',desc:'Commercial maize producers and agronomy exchange.'},
 {id:'cm2',name:'Poultry Keepers Circle',desc:'Broiler, layer, and indigenous chicken management.'},
 {id:'cm3',name:'Horticulture & Vegetable Growers',desc:'Tomatoes, onions, leafy greens, and irrigation.'},
 {id:'cm4',name:'Dairy Cattle Breeders',desc:'Fodder preservation, breed improvement, and milk marketing.'}
];

/* ============ store ============ */
const KEY='mimi_ni_mkulima_v1';
function seedDB(){return{v:1,session:null,users:{},guest:{ai:{},history:[]},
  settings:{lang:'en',dark:true,font:'sans',size:100,chatTheme:'system',shareInfo:true,allowProfile:true,secure:false,autoDelBlocked:true,location:false,perm:{file:true,camera:true,mic:true}},
  posts:[]}}
function loadDB(){try{const r=localStorage.getItem(KEY);if(r){const d=JSON.parse(r);if(d&&d.v===1){
  d.posts=(d.posts||[]).filter(p=>!p.seed&&!RETIRED_SEED_USERS.has(p.by));
  Object.values(d.users||{}).forEach(u=>{
    u.contacts=(u.contacts||[]).filter(c=>!c.demo&&!RETIRED_DEMO_CONTACTS.has(c.id));
    const aiContact=u.contacts.find(c=>c.id==='ai');if(aiContact)aiContact.name='Agro AI';
    const aiChat=(u.chats||{}).ai;if(aiChat){aiChat.name='Agro AI';const welcome=aiChat.msgs&&aiChat.msgs[0];if(welcome&&welcome.from==='ai'&&typeof welcome.text==='string')welcome.text=welcome.text.replace('MIMI Assistant','Agro AI').replace('MIMI ASSISTANT','Agro AI')}
    u.statuses=(u.statuses||[]).filter(s=>!RETIRED_DEMO_CONTACTS.has(s.by));
    u.following=(u.following||[]).filter(id=>!RETIRED_SEED_USERS.has(id));
    u.reposts=(u.reposts||[]).filter(id=>d.posts.some(p=>p.id===id));
    // Remove old dummy channels and guarantee the official MIMI NI MKULIMA channel
    u.channels=(u.channels||[]).filter(c=>c.id!=='ch1'&&c.id!=='ch2');
    if(!u.channels.some(c=>c.id==='ch_mimi_official')){
      u.channels.unshift(Object.assign({},SEED_CHANNELS[0],{followed:true,mine:false}));
    }
    for(const id of RETIRED_DEMO_CONTACTS)delete (u.chats||{})[id];
    Object.values(u.chats||{}).forEach(c=>(c.msgs||[]).forEach(m=>{if(typeof m.src==='string'&&m.src.startsWith('blob:')){m.src=null;m.dead=true}}));
  });
  d.settings=Object.assign(seedDB().settings,d.settings||{});localStorage.setItem(KEY,JSON.stringify(d));return d}}}catch(e){}return seedDB()}
let DB=loadDB(),saveT;
function save(){clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){toast('Device storage is full. Please remove some photos or posts.')}},200)}
const curUser=()=>DB.users[DB.session]||null;
const fv=(f,n)=>{const e=f.elements.namedItem(n);return e?e.value:''};
const PRIV=()=>curUser()?curUser().priv:DB.settings;
const P=()=>curUser()||DB.guest;
const ST=()=>DB.settings;
function newUserData(u){
  Object.assign(u,{priv:{shareInfo:true,allowProfile:true,secure:false,autoDelBlocked:true,location:false},following:[],liked:[],saved:[],reposts:[],listings:[],ai:{},history:[],farm:{},calls:[],blocked:[],chats:{},
    contacts:SEED_CONTACTS.map(c=>({...c,fav:false,blocked:false})),
    channels:SEED_CHANNELS.map(c=>({id:c.id,name:c.name,desc:c.desc,followed:true,mine:false,posts:c.posts.map(p=>({id:p.id,text:p.text,ts:now()-p.ago}))})),
    communities:SEED_COMM.map(c=>({...c,joined:false})),
    statuses:[]});
  u.chats.ai={id:'ai',type:'dm',name:'Agro AI',unread:0,msgs:[{id:uid('m'),from:'ai',kind:'text',text:curLang()==='en'?'Welcome! I am Agro AI. Ask me any question or attach photos, videos, audios, and documents about farming or livestock.':'Karibu! Mimi ni Agro AI. Niulize chochote au tuma picha, video, sauti, au nyaraka kuhusu kilimo au ufugaji.',ts:now()}]};
}

/* ============ AI ============ */
const BASE_SYS=`You are "Agro AI", an expert agricultural and livestock consultant for the MIMI NI MKULIMA application.
Provide accurate, structured, and actionable advice in English or Kiswahili, matching the language of the user.
You can inspect, read, and understand images, videos, audio recordings, PDFs, Word docs, PowerPoint presentations, and spreadsheets.
Give practical measurements (acres, kg, liters, local currency) and safety instructions.
For agrochemicals, pesticides, and veterinary vaccines: explain foundational guidelines, recommend reading product labels, and advise consulting local extension agents or veterinarians for critical symptoms.
Never invent statistics or fluctuating market prices. Keep responses concise, organized, and helpful.`;

function farmOf(k){const u=curUser();if(!u)return{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]};return u.farm[k]=u.farm[k]||{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]}}
function farmContext(k){const f=farmOf(k),p=[];if(f.name)p.push('Name: '+f.name);if(f.size)p.push((k==='kilimo'?'Size (acres): ':'Herd size: ')+f.size);if(f.items)p.push((k==='kilimo'?'Crops: ':'Livestock: ')+f.items);if(f.place)p.push('Location: '+f.place);if(f.notes)p.push('Overview: '+f.notes);const o=f.tasks.filter(t=>!t.done).slice(0,8).map(t=>t.text);if(o.length)p.push('Pending tasks: '+o.join('; '));return p.length?p.join('\n'):'(No details recorded yet.)'}
function sysFor(mode){let s=BASE_SYS;const k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji';
  s+=k==='kilimo'?'\nFocus: Agriculture & crop husbandry.':'\nFocus: Livestock & animal husbandry.';
  if(mode==='shamba'||mode==='banda')s+='\nUser profile context:\n'+farmContext(k)+'\nUse this profile to personalize your recommendation.';
  return s}

let AI_QUEUE_CHAIN = Promise.resolve();
const AI_CLIENT_CACHE = new Map();

function fileToData(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=reject;
    reader.readAsDataURL(file);
  });
}

async function runAI(turns,o){o=o||{};
  const t=turns.slice(-14).map(x=>({role:x.role,content:String(x.content).slice(0,6000)}));
  while(t.length&&t[0].role==='assistant')t.shift();
  if(!t.length)return{text:''};

  const cacheKey=JSON.stringify({
    m:t.map(m=>({r:m.role,c:m.content.trim().toLowerCase()})),
    s:(o.system||BASE_SYS).slice(0,500),
    hasFile:!!(o.file||o.images)
  });

  if(!o.file&&!o.images&&AI_CLIENT_CACHE.has(cacheKey)){
    return{text:AI_CLIENT_CACHE.get(cacheKey)};
  }

  const executeCall=async()=>{
    try {
      let filePayload={};
      if(o.file){
        filePayload={
          file_data:o.file.data,
          file_name:o.file.name,
          file_type:o.file.type
        };
      }else if(o.images){
        const imageData=await imgToData(o.images);
        if(imageData)filePayload={image_data:imageData,file_data:imageData,file_type:'image/jpeg'};
      }

      const res=await fetch(`${API_BASE}/api/v1/ai/chat`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        signal:o.signal,
        body:JSON.stringify({
          messages:t,
          system_prompt:o.system||BASE_SYS,
          mode:o.mode||S.sec||'kilimo',
          ...filePayload
        })
      });
      if(!res.ok){
        const err=await res.json().catch(()=>({}));
        throw{code:res.status===429?'rate_limited':'upstream_error',text:err.detail||(curLang()==='sw'?'Huduma ya AI inashughulikia maombi. Tafadhali subiri kidogo.':'AI service is busy. Please wait a moment.')};
      }
      const data=await res.json();
      if(typeof data.text!=='string'||!data.text.trim())throw{code:'empty_completion'};
      if(!o.file&&!o.images){
        AI_CLIENT_CACHE.set(cacheKey,data.text);
        if(AI_CLIENT_CACHE.size>60){
          const firstKey=AI_CLIENT_CACHE.keys().next().value;
          AI_CLIENT_CACHE.delete(firstKey);
        }
      }
      return{text:data.text};
    }catch(e){
      if(e&&e.code)throw e;
      if(e&&e.name==='AbortError')throw{code:'cancelled',text:curLang()==='sw'?'Ombi limesimamishwa.':'Request was stopped.'};
      throw{code:'backend_error',text:curLang()==='sw'?'Haikuweza kuunganishwa na seva ya AI. Tafadhali jaribu tena.':'Could not connect to the AI server. Please try again.'};
    }
  };

  const currentChain=AI_QUEUE_CHAIN.then(executeCall,executeCall);
  AI_QUEUE_CHAIN=currentChain.catch(()=>{});
  return currentChain;
}

function aiErr(e){const c=e&&e.code;if(c==='cancelled')return'';if(c==='rate_limited')return'AI usage limit reached. Please try again later.';if(c==='upstream_error'||c==='empty_completion')return'AI service is unavailable right now. Please try again.';if(c==='prompt_too_large')return'The message is too long. Please shorten it and try again.';return'AI service is currently offline or unreachable.'}

/* ============ router ============ */
const S={view:'home',sec:'kilimo',tab:'jifunze',ltab:'kazi',ct:'chats',thread:null,cv:null,stream:{tab:'you',q:'',focus:null},learn:{q:'',tab:'maelezo',doc:null,media:{query:'',loading:false,results:[],error:null},mediaRequest:0},auth:'login',ptab:'maudhui'};
const VIEWS={},POST={},SECTAB={},ACT={},FORM={};
const chatPal=()=>ST().chatTheme==='system'?(ST().dark?'dark':'light'):ST().chatTheme;

function applyPrefs(){
  const s=ST(),r=document.documentElement;
  r.dataset.theme=s.dark?'dark':'light';
  r.style.setProperty('--ts',String(s.size/100));
  r.style.setProperty('--font-body',s.font==='serif'?"'Times New Roman',Georgia,serif":s.font==='mono'?"ui-monospace,'SF Mono',Menlo,Consolas,monospace":"'Figtree',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif");
  const foundLang=SUPPORTED_LANGUAGES.find(x=>x.code===s.lang)||SUPPORTED_LANGUAGES[0];
  r.lang=foundLang.code;
  r.dir=foundLang.dir||'ltr';
  const langInd=$('#langIndicator');
  if(langInd)langInd.textContent=foundLang.code.toUpperCase();
}

function render(){
  applyPrefs();
  const navEl=$('#nav');
  if(navEl){
    const brandSub=navEl.querySelector('.brand small');
    if(brandSub)brandSub.innerHTML=t('brand_sub');
    const navItems=[
      ['home',t('nav_home')],
      ['account',t('nav_account')],
      ['chat',t('nav_chat')],
      ['stream',t('nav_stream')],
      ['about',t('nav_about')],
      ['settings',t('nav_settings')]
    ];
    navItems.forEach(([v,l])=>{
      const b=navEl.querySelector(`[data-v="${v}"] span`);
      if(b)b.textContent=l;
    });
  }
  $$('#nav [data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
  $('#main').innerHTML=VIEWS[S.view]();
  if(POST[S.view])POST[S.view]();
  // Admin floating bar: visible on all pages except admin panel itself
  let adminBar=$('#adminFloatingBar');
  const adminUser=curUser();
  if(adminUser&&adminUser.role==='admin'&&S.view!=='admin'){
    if(!adminBar){
      adminBar=document.createElement('div');
      adminBar.id='adminFloatingBar';
      adminBar.className='admin-floating-bar';
      document.body.appendChild(adminBar);
    }
    adminBar.innerHTML=`🛡️ Admin <button data-act="goAdmin">Control Panel</button>`;
  } else {
    if(adminBar)adminBar.remove();
  }
}

function go(v,p){Object.assign(S,{view:v},p||{});closeSheet();render();$('#main').scrollTop=0}
function needLogin(msg){if(curUser())return false;toast(msg||t('guest_note'));go('account',{auth:'login'});return true}
const refreshSec=()=>{const b=$('#secBody');if(b)b.innerHTML=SECTAB[S.tab]();else render()};

/* ============ home ============ */
const furrows=()=>Array.from({length:9},(_,i)=>{const y=30+i*26;return`<path d="M0 ${y} C 180 ${y-38}, 420 ${y+38}, 800 ${y-12}"/>`}).join('');
VIEWS.home=()=>{const u=curUser();
  return`<div class="view"><header class="hero">
    <img class="hero-bg" src="../Assets/images/hero_banner.jpg" alt="" loading="eager" decoding="async">
    <div class="hero-overlay"></div>
    <svg class="furrows" viewBox="0 0 800 260" preserveAspectRatio="none" aria-hidden="true">${furrows()}</svg>
    <div class="hero-content">
      <div class="hero-welcome-pill">
        <span class="hero-status-dot"></span>
        <p class="hello">${u?t('hello_back')+', '+esc(u.name.split(' ')[0]):t('hello_guest')}</p>
      </div>
      <h1 class="mark"><span>MIMI NI</span>MKULIMA</h1>
      <p class="lede">${t('home_lede')}</p>
    </div>
  </header>
  <div class="split">
   <button class="door" data-act="openSec" data-sec="kilimo">
     <img class="door-bg" src="../Assets/images/home_farming.jpg" alt="" loading="eager">
     <div class="door-overlay"></div>
     <div class="door-content">
       ${ic('leaf','door-ic')}
       <span class="door-t">${t('door_grow_t')}</span>
       <span class="door-s">${t('door_grow_s')}</span>
       <span class="chips"><i>${t('door_grow_c1')}</i><i>${t('door_grow_c2')}</i><i>${t('door_grow_c3')}</i><i>${t('door_grow_c4')}</i></span>
     </div>
   </button>
   <button class="door ochre" data-act="openSec" data-sec="ufugaji">
     <img class="door-bg" src="../Assets/images/home_livestock.jpg" alt="" loading="eager">
     <div class="door-overlay"></div>
     <div class="door-content">
       ${ic('paw','door-ic')}
       <span class="door-t">${t('door_raise_t')}</span>
       <span class="door-s">${t('door_raise_s')}</span>
       <span class="chips"><i>${t('door_raise_c1')}</i><i>${t('door_raise_c2')}</i><i>${t('door_raise_c3')}</i><i>${t('door_raise_c4')}</i></span>
     </div>
   </button>
  </div></div>`};

ACT.openSec=el=>{go('section',{sec:el.dataset.sec,tab:'menu',ltab:'kazi',learn:{q:'',tab:'maelezo',doc:null,media:{query:'',loading:false,results:[],error:null},mediaRequest:0}})};
ACT.stab=el=>{S.tab=el.dataset.t;render()};
ACT.sectionEntry=el=>{S.tab=el.dataset.t;render()};
ACT.sectionMenu=()=>{S.tab='menu';render()};
ACT.go=el=>go(el.dataset.v);
ACT.closeSheet=()=>closeSheet();

ACT.toggleLang=()=>{
  ACT.openLangPicker();
};

ACT.openLangPicker=()=>{
  const cur=curLang();
  sheet(cur==='sw'?'Chagua Lugha / Select Language':'Select Language / Chagua Lugha',`
    <div class="lang-sheet-wrap">
      <p class="muted small" style="margin:0">${cur==='sw'?'Chagua lugha unayopendelea kwa ajili ya programu nzima:':'Choose your preferred language for the entire webapp:'}</p>
      <div class="lang-grid">
        ${SUPPORTED_LANGUAGES.map(l=>`
          <button type="button" class="lang-card ${cur===l.code?'on':''}" data-act="setLang" data-code="${l.code}">
            <span class="lang-card-flag">${l.flag}</span>
            <span class="lang-card-native">${esc(l.native)}</span>
            <span class="lang-card-name">${esc(l.name)}</span>
            ${cur===l.code?'<span class="lang-card-check">✓</span>':''}
          </button>
        `).join('')}
      </div>
    </div>
  `);
};

ACT.setLang=el=>{
  const code=el.dataset.code;
  if(!code)return;
  DB.settings.lang=code;
  save();
  applyPrefs();
  closeSheet();
  render();
  toast(t('toast_lang_changed', 'Language changed successfully!'));
};

/* ============ section ============ */
const SECTION_PHOTOS={
  kilimo:{
    jifunze:['../Assets/images/farming_learn.jpg','https://commons.wikimedia.org/wiki/File:Maize_field_in_Canterbury.jpg'],
    mtaalamu:['../Assets/images/farming_expert.jpg','https://commons.wikimedia.org/wiki/File:Agronomist_%26_Farmer_Inspecting_Weeds_%2813782437474%29.jpg'],
    ai:['../Assets/images/farming_ai.jpg','https://commons.wikimedia.org/wiki/File:Technology_Contributing_to_Agriculture.jpg'],
    langu:['../Assets/images/farming_farm.jpg','https://commons.wikimedia.org/wiki/File:Silage_windrows_and_two_tractors_2.jpg']
  },
  ufugaji:{
    jifunze:['../Assets/images/livestock_learn.jpg','https://commons.wikimedia.org/wiki/File:Cattle_grazing_20251.jpg'],
    mtaalamu:['../Assets/images/livestock_expert.jpg','https://commons.wikimedia.org/wiki/File:Ethiopia%2C_U.S._partner_for_veterinarian_project_%288144860257%29.jpg'],
    ai:['../Assets/images/livestock_ai.jpg','https://commons.wikimedia.org/wiki/File:Dairy_Campus_Ljouwert05.jpg'],
    langu:['../Assets/images/livestock_barn.jpg','https://commons.wikimedia.org/wiki/File:Foraging_Backyard_Poultry.jpg']
  }
};
VIEWS.section=()=>{const k=S.sec,T=SEC[k],isSw=curLang()==='sw';
  const title=isSw?(k==='kilimo'?'Kilimo Bora':'Ufugaji Bora'):T.title;
  const sub=isSw?(k==='kilimo'?'Mbinu za Kilimo':'Mbinu za Mifugo'):T.sub;
  const sections=[
    ['jifunze',k==='kilimo'?t('door_grow_c1'):t('door_raise_c1'),k==='kilimo'?t('section_learn_farm_desc'):t('section_learn_livestock_desc'),k==='kilimo'?'leaf':'paw'],
    ['mtaalamu',t('tab_expert'),t('section_expert_desc'),'user'],
    ['ai',t('tab_ai'),t('section_ai_desc'),'chat'],
    ['langu',k==='kilimo'?t('tab_my_farm'):t('tab_my_barn'),k==='kilimo'?t('section_farm_desc'):t('section_barn_desc'),'home']
  ];
  const inSection=S.tab!=='menu';
  const tabInfo=inSection?sections.find(s=>s[0]===S.tab):null;
  const tabPhoto=tabInfo?SECTION_PHOTOS[k][S.tab]:null;

  const headerHtml=inSection&&tabPhoto?`
    <div class="sec-tab-banner">
      <img class="sec-tab-banner-bg" src="${tabPhoto[0]}" alt="" loading="eager">
      <div class="sec-tab-banner-overlay"></div>
      <div class="sec-tab-banner-content">
        <button class="icon-btn sec-tab-banner-back" data-act="sectionMenu" aria-label="${t('another_topic')}">${ic('back')}</button>
        <div class="sec-tab-banner-meta">
          <span class="sec-badge">${k==='kilimo'?(isSw?'Kilimo':'Farming'):(isSw?'Ufugaji':'Livestock')}</span>
          <h2>${tabInfo[1]}</h2>
          <p class="sec-tab-banner-sub">${tabInfo[2]}</p>
        </div>
      </div>
    </div>`:
    `<div class="sec-head">
      <button class="icon-btn" data-act="${inSection?'sectionMenu':'go'}" ${inSection?'':'data-v="home"'} aria-label="${inSection?t('another_topic'):t('back_home')}">${ic('back')}</button>
      <div><h2>${title}</h2><p class="muted small">${sub}</p></div>
    </div>`;

  const body=inSection?SECTAB[S.tab]():`<div class="section-menu">${sections.map(([id,label,description,icon])=>{
    const [image,source]=SECTION_PHOTOS[k][id];
    return`<article class="section-entry">
      <button class="section-entry-main" data-act="sectionEntry" data-t="${id}">
        <img class="section-entry-bg" src="${image}" alt="" loading="eager" decoding="async">
        <div class="section-entry-overlay"></div>
        <div class="section-entry-content">
          <div class="section-entry-top">
            <span class="section-entry-icon">${ic(icon)}</span>
            <span class="section-entry-arrow-pill">${ic('back','section-entry-arrow')}</span>
          </div>
          <div class="section-entry-copy">
            <b class="section-entry-label">${label}</b>
            <span class="section-entry-description">${description}</span>
          </div>
        </div>
      </button>
      <a class="section-entry-credit" href="${source}" target="_blank" rel="noopener noreferrer">${t('section_photo_source')}</a>
    </article>`}).join('')}</div>`;

  return`<div class="view" data-sec="${k}">${headerHtml}<div id="secBody">${body}</div></div>`;
};

/* --- learn --- */
const engines=q=>{const e=encodeURIComponent(q+' Tanzania');return[['Google','https://www.google.com/search?q='],['Bing','https://www.bing.com/search?q='],['DuckDuckGo','https://duckduckgo.com/?q='],['Yahoo','https://search.yahoo.com/search?p='],['Brave','https://search.brave.com/search?q=']].map(([n,u])=>`<a href="${u}${e}" target="_blank" rel="noopener noreferrer">${n}</a>`).join('')};
function thumbHTML(p){const s=safeSrc(p.src);const inner=p.kind==='image'&&s?`<img src="${s}" alt="" loading="lazy">`:p.kind==='video'&&s?`<video src="${s}" muted preload="metadata"></video>`:'';
  return`<button class="thumb" style="${inner?'':'background:'+BGS[p.bg||0]}" data-act="openPost" data-id="${esc(p.id)}" aria-label="Open post">${inner||`<span class="tt">${esc((p.text||p.caption||'').slice(0,70))}</span>`}</button>`}

function docHTML(){const d=S.learn.doc;
  return`<button class="btn ghost sm" data-act="docBack">${ic('back')} ${t('another_topic')}</button>
  <article class="doc" id="docText" style="margin-top:.8rem">${d.text?md(d.text):`<p class="muted"><span class="pulse"></span> ${t('preparing_details')}</p>`}</article>
  ${d.busy?'':`<div class="note" style="margin-top:1rem">${d.src==='ai'?t('ai_disclaimer'):t('local_disclaimer')} ${t('verify_engines')}</div><div class="engines">${engines(d.q)}</div>`}
  <div id="qaList">${d.qa.map(a=>`<div class="qa"><p class="q">${esc(a.q)}</p><div class="doc">${a.a?md(a.a):'<span class="pulse"></span>'}</div></div>`).join('')}</div>
  ${d.busy?'':`<form class="searchbar" data-form="more">${ic('chat')}<input name="q" placeholder="${t('ask_another')}" aria-label="Ask more" autocomplete="off"><button class="btn sm">${t('btn_ask')}</button></form>`}`}

function mediaHTML(kind){const q=S.learn.q.trim(),lab=kind==='image'?t('tab_photos'):t('tab_videos');
  if(!q)return`<div class="empty"><b>${lab}</b>${t('search_first_note')}</div>`;
  const encoded=encodeURIComponent(q+' Tanzania');
  if(kind==='video'){
    const links=[
      ['YouTube Shorts',`https://www.youtube.com/results?search_query=${encodeURIComponent('shorts '+q+' Tanzania')}`],
      ['YouTube',`https://www.youtube.com/results?search_query=${encoded}`],
      ['Google Videos',`https://www.google.com/search?tbm=vid&q=${encoded}`],
      ['TikTok',`https://www.tiktok.com/search?q=${encoded}`],
      ['Facebook',`https://www.facebook.com/search/videos/?q=${encoded}`]
    ];
    const words=q.toLowerCase().split(/\s+/).filter(w=>w.length>3&&!['jinsi','kulima','kufuga','how','to','grow','raise'].includes(w));
    const ps=DB.posts.filter(p=>p.kind==='video'&&safeSrc(p.src)&&words.some(w=>(p.text+' '+p.caption+' '+p.tag).toLowerCase().includes(w)));
    return`<p class="muted">${t('btn_search')} videos for “${esc(q)}”</p><div class="engines">${links.map(([n,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${n}</a>`).join('')}</div>
    <h3 style="font:800 1.05rem var(--font-display);margin:1rem 0 .5rem">${t('videos_farmers')}</h3>
    ${ps.length?`<div class="thumbs">${ps.map(thumbHTML).join('')}</div>`:`<div class="note">${t('no_videos')}</div>`}`;
  }
  const media=S.learn.media;
  if(media.query!==q||media.loading)return`<p class="muted">${t('searching_commons')} <span class="pulse"></span></p>`;
  if(media.error)return`<div class="note">${esc(media.error)} <button class="btn ghost sm" data-act="retryCommons">${t('btn_retry')}</button></div>`;
  if(!media.results.length)return`<div class="empty"><b>${t('no_photos')}</b>${t('no_photos_sub')}</div>`;
  return`<p class="muted">${t('photos_commons_note')}</p>
    <div class="media-grid">${media.results.map(image=>`<article class="media-card"><a class="media-image-link" href="${esc(image.pageUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(image.title)}"><img src="${esc(image.thumbnail)}" alt="${esc(image.title)}" loading="lazy" referrerpolicy="no-referrer"></a><div class="media-caption"><b>${esc(image.title)}</b>${image.artist?`<span>${esc(image.artist)}</span>`:''}${image.license?`<span>${t('license_label')}: ${esc(image.license)}</span>`:''}</div></article>`).join('')}</div>`;
}

async function loadCommonsImages(query){
  const q=query.trim();if(!q)return;
  const media=S.learn.media;
  if(media.query===q&&(media.loading||media.results.length||media.error))return;
  const request=++S.learn.mediaRequest;
  Object.assign(media,{query:q,loading:true,results:[],error:null});
  refreshSec();
  const stopWords=new Set(['how','to','do','i','grow','raise','farm','farming','jinsi','ya','kulima','kufuga','kilimo','ufugaji','cha','wa','the','for','with','and','in','on','identify','diagnose','control','prevent','disease','diseases','management','tanzania','africa']);
  const words=q.toLowerCase().replace(/[’']/g,'').match(/[a-z0-9]+/g)||[];
  const term=words.filter(word=>!stopWords.has(word)).pop()||words[0]||q;
  const searchTerms={mahindi:'maize',corn:'maize',mchele:'rice',mpunga:'rice',ngombe:'cattle',kuku:'chicken',nyanya:'tomato',maharage:'beans',viazi:'potato',mbuzi:'goat',samaki:'fish'};
  const searchTerm=searchTerms[term]||term;
  try{
    const response=await fetch(`${API_BASE}/api/v1/media/images?q=${encodeURIComponent(searchTerm)}`);
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const data=await response.json();
    const results=(data.results||[]).map(image=>({
      title:image.title,
      thumbnail:image.thumbnail,
      pageUrl:image.page_url,
      artist:image.artist,
      license:image.license
    }));
    if(request!==S.learn.mediaRequest)return;
    Object.assign(media,{query:q,loading:false,results,error:null});
  }catch(error){
    if(request!==S.learn.mediaRequest)return;
    Object.assign(media,{query:q,loading:false,results:[],error:curLang()==='en'?'Failed to fetch photos from Wikimedia Commons. Please check your connection.':'Imeshindikana kupata picha kutoka Wikimedia Commons.'});
  }
  if(S.view==='section'&&S.tab==='jifunze'&&S.learn.tab==='picha')refreshSec();
}

function historyHTML(){const h=P().history||[];if(!h.length)return`<div class="empty"><b>${t('no_history')}</b>${t('no_history_sub')}</div>`;
  return`<div class="list">${h.map((x,i)=>`<button class="item" data-act="hist" data-i="${i}">${ic('clock')}<span class="grow">${esc(x.q)}</span><span class="muted small">${ago(x.ts)}</span></button>`).join('')}</div><p style="margin-top:1rem"><button class="btn danger sm" data-act="clearHist">${t('btn_clear_history')}</button></p>`}

function learnHTML(){const k=S.sec,T=SEC[k],L=S.learn,isSw=curLang()==='sw';
  const tabs=[['maelezo',t('tab_overview')],['picha',t('tab_photos')],['video',t('tab_videos')],['historia',t('tab_history')]];
  const topicList=isSw?(T.topics_sw||T.topics):T.topics;
  let body;
  if(L.tab==='maelezo')body=L.doc?docHTML():`<p class="muted small">${k==='kilimo'?'Learn modern farming techniques. Choose a topic or search.':'Learn modern livestock keeping. Choose a topic or search.'}</p><div style="margin-top:.4rem">${topicList.map(item=>`<button class="topic" data-act="topic" data-q="${esc(item)}"><span class="dot"></span>${esc(item)}</button>`).join('')}</div>`;
  else if(L.tab==='picha')body=mediaHTML('image');else if(L.tab==='video')body=mediaHTML('video');else body=historyHTML();
  return`<form class="searchbar" data-form="learn" role="search">${ic('search')}<input name="q" value="${esc(L.q)}" placeholder="${k==='kilimo'?t('search_crop_ph'):t('search_animal_ph')}" aria-label="Search" autocomplete="off"><button class="btn sm">${t('btn_search')}</button></form>
  <div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${L.tab===i?'on':''}" data-act="ltab" data-t="${i}">${l}</button>`).join('')}</div>${body}`}

SECTAB.jifunze=learnHTML;
ACT.ltab=el=>{
  const tab=el.dataset.t,q=S.learn.q.trim();
  S.learn.tab=tab;
  refreshSec();
  if(q&&tab==='picha')loadCommonsImages(q);
};
ACT.retryCommons=()=>{S.learn.media.query='';loadCommonsImages(S.learn.q)};
ACT.topic=el=>openDoc(el.dataset.q);
ACT.docBack=()=>{S.learn.doc=null;refreshSec()};
ACT.hist=el=>{const h=P().history[+el.dataset.i];if(h)openDoc(h.q)};
ACT.clearHist=()=>{P().history=[];save();refreshSec()};
FORM.learn=f=>{const q=fv(f,'q').trim();if(!q)return toast(curLang()==='en'?'Enter what you want to search.':'Andika unachotaka kutafuta.');openDoc(q)};
FORM.more=f=>{const q=fv(f,'q').trim();if(q)askMore(q)};

async function openDoc(q){const L=S.learn,k=S.sec,isSw=curLang()==='sw';L.q=q;L.tab='maelezo';const d=L.doc={q,text:'',qa:[],busy:true,src:'ai'};
  const h=P().history=(P().history||[]).filter(x=>x.q.toLowerCase()!==q.toLowerCase());h.unshift({q,ts:now()});P().history=h.slice(0,30);save();refreshSec();
  const prompt=isSw
    ?`Andika mwongozo wa kina kuhusu: "${q}" (${k==='kilimo'?'kilimo':'ufugaji'}, Tanzania). Muundo: sentensi 2 za muhtasari; kisha vichwa ndani ya ** ** kama Maandalizi, Kupanda, Mbolea, Wadudu na magonjwa, Mavuno na masoko. Vidokezo vifupi vya vitendo.`
    :`Write a practical comprehensive guide on: "${q}" (${k==='kilimo'?'agriculture/crop farming':'livestock keeping'}). Structure: 2-sentence summary; then sections titled inside ** ** like Land Preparation, Planting/Housing, Fertilizer & Feeding, Pests & Diseases, Harvest & Marketing. End with actionable practical tips.`;
  try{const r=await runAI([{role:'user',content:prompt}],{system:sysFor(k)});d.text=r.text}
  catch(e){const g=localGuide(q);d.src='local';d.text=g||(isSw?`Samahani, AI haipatikani sasa na sina mwongozo wa msingi wa "${q}".\n\n${(e&&e.text)||aiErr(e)}`:`Sorry, AI is currently unavailable and no offline guide was found for "${q}".\n\n${(e&&e.text)||aiErr(e)}`)}
  d.busy=false;if(S.learn.doc===d&&S.view==='section')refreshSec()}

async function askMore(q){const d=S.learn.doc;if(!d||d.busy)return;const a={q,a:'',busy:true};d.qa.push(a);d.busy=true;refreshSec();
  const ctx=`Guide context on "${d.q}":\n${d.text.slice(0,4000)}\n\n`+d.qa.slice(0,-1).slice(-3).map(x=>`Q: ${x.q}\nA: ${x.a.slice(0,700)}`).join('\n\n')+`\n\nFollow-up question: ${q}`;
  try{const r=await runAI([{role:'user',content:ctx}],{system:sysFor(S.sec)});a.a=r.text}
  catch(e){a.a=(e&&e.text)||localGuide(q)||aiErr(e)}
  d.busy=false;if(S.learn.doc===d&&S.view==='section')refreshSec()}

/* --- experts --- */
const roleLabel=role=>t(`role_${role}`);
function renderExperts(experts){const list=$('#expertList');if(!list)return;list.innerHTML=experts.length?experts.map(expert=>`<div class="item expert-item">${av(expert.name,'',colorOf(expert.id))}<span class="grow"><b>${esc(expert.name)}</b><br><span class="muted small">${roleLabel(expert.role)}</span><br><span class="muted small">${expert.online?t('expert_online'):t('expert_offline')}</span></span><button class="icon-btn" data-act="expertChat" data-id="${esc(expert.id)}" data-name="${esc(expert.name)}" data-role="${esc(expert.role)}" aria-label="${t('btn_chat')} ${esc(expert.name)}" title="${t('btn_chat')}">${ic('chat')}</button><button class="icon-btn" data-act="expertCall" data-id="${esc(expert.id)}" data-name="${esc(expert.name)}" data-role="${esc(expert.role)}" aria-label="${t('btn_call')} ${esc(expert.name)}" title="${t('btn_call')}">${ic('phone')}</button></div>`).join(''):`<div class="empty">${t('no_experts')}</div>`}
async function loadExperts(){const list=$('#expertList');if(!list)return;const user=curUser();if(user&&['crop_expert','livestock_expert'].includes(user.role)){list.innerHTML=`<div class="empty">${t('expert_inbox_note')}</div>`;return}try{const result=await communicationsRequest(`/experts?kind=${encodeURIComponent(S.sec)}`);renderExperts(result.experts||[])}catch(e){if($('#expertList'))$('#expertList').innerHTML=`<div class="empty">${t('verification_unavailable')}</div>`}}
SECTAB.mtaalamu=()=>`<div class="note">${t('expert_note')}</div><div class="list" id="expertList" style="margin-top:.6rem"><div class="empty"><span class="pulse"></span></div></div><p class="muted small" style="margin:1rem 0 .3rem">${t('also_chat_ai')}</p><button class="btn ghost sm" data-act="openThread" data-id="ai">${t('open_ai_assistant')}</button>`;

/* --- AI chat --- */
let AIBUSY=false,AICTL=null,ATT=null,LISTING_IMG=null;
function aiStore(mode){const p=P();p.ai=p.ai||{};return p.ai[mode]=p.ai[mode]||{sessions:[],active:null}}
function aiSess(mode,create){const st=aiStore(mode);let s=st.sessions.find(x=>x.id===st.active);if(!s&&create){s={id:uid('s'),title:curLang()==='en'?'New conversation':'Mazungumzo mapya',ts:now(),turns:[]};st.sessions.unshift(s);st.active=s.id}return s}
const bubHTML=t=>t.role==='user'?`<div class="bub me">${esc(t.content)}</div>`:`<div class="bub bot">${md(t.content)}</div>`;

function aiChatHTML(mode){const s=aiSess(mode,false),k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji',isSw=curLang()==='sw';
  const sugs=isSw?(SEC[k].sugs_sw||SEC[k].sugs):SEC[k].sugs;
  const msgs=s&&s.turns.length?s.turns.map(bubHTML).join(''):`<div class="ai-hello"><h3>${t('ai_assistant_name')}</h3><p>${t('ai_help_prompt')}</p><div class="sugs">${sugs.map(x=>`<button data-act="aiSug" data-q="${esc(x)}">${esc(x)}</button>`).join('')}</div></div>`;
  return`<section class="aichat" data-pal="${chatPal()}" data-mode="${mode}" aria-label="${t('tab_ai')}">
  <div class="ai-top"><button class="btn ghost sm" data-act="aiHistory">${ic('clock')} ${t('ai_history')}</button><button class="btn soft sm" data-act="aiNew">${ic('plus')} ${t('ai_new_chat')}</button></div>
  <div class="ai-msgs" id="aiMsgs" aria-live="polite">${msgs}</div><div id="attBar"></div>
  <div class="ai-in"><button class="icon-btn" data-act="aiAttach" aria-label="Attachment">${ic('plus')}</button><button class="icon-btn" data-act="aiCamera" aria-label="Camera">${ic('camera')}</button><textarea class="field" id="aiText" rows="1" placeholder="${t('ai_input_ph')}" aria-label="Message"></textarea><button class="btn" id="aiGo" data-act="aiSend" aria-label="Send">${ic('send')}</button></div></section>`}

SECTAB.ai=()=>aiChatHTML(SEC[S.sec].ai);
POST.section=()=>{const b=$('#aiMsgs');if(b)b.scrollTop=b.scrollHeight;if(S.tab==='mtaalamu')loadExperts()};
function setGo(busy){const b=$('#aiGo');if(b){b.dataset.act=busy?'aiStop':'aiSend';b.innerHTML=ic(busy?'stop':'send');b.setAttribute('aria-label',busy?'Stop':'Send')}}

async function aiSend(text){const root=$('.aichat');if(!root||AIBUSY)return;const mode=root.dataset.mode,ta=$('#aiText');
  text=(text!=null?text:ta.value).trim();const att=ATT;if(!text&&!att)return;
  const s=aiSess(mode,true);let aug=text,fileObj;
  if(att){
    fileObj={
      data:att.data,
      name:att.name,
      type:att.type
    };
    if(att.kind==='image'){
      aug=text||(curLang()==='en'?'Please inspect this crop/animal image and provide agricultural advice.':'Tafadhali chunguza picha hii na unipe ushauri wa kilimo/mifugo.');
    }else if(att.kind==='video'){
      aug=text||(curLang()==='en'?'Please analyze this farm/crop/livestock video and provide advice.':'Tafadhali kagua video hii ya shamba/mifugo na unipe ushauri wa kitaalamu.');
    }else if(att.kind==='audio'){
      aug=text||(curLang()==='en'?'Please listen to this audio recording and answer the agricultural question.':'Tafadhali sikiliza sauti hii na unipe ushauri wa kilimo au mifugo.');
    }else{
      aug=text||(curLang()==='en'?`Please read and analyze this attached document (${att.name}):`:`Tafadhali soma na uchambue nyaraka hii (${att.name}):`);
    }
  }
  const iconStr=att?(att.kind==='video'?'🎬 ':att.kind==='audio'?'🎧 ':att.kind==='doc'?'📄 ':'📷 '):'';
  const shown=iconStr+(text||(att?att.name:''));
  s.turns.push({role:'user',content:shown});if(s.turns.length===1)s.title=shown.slice(0,42);s.ts=now();
  ta.value='';ATT=null;$('#attBar').innerHTML='';
  const box=$('#aiMsgs');if(!box.querySelector('.bub'))box.innerHTML='';
  box.insertAdjacentHTML('beforeend',bubHTML({role:'user',content:shown}));
  const bot=document.createElement('div');bot.className='bub bot';bot.innerHTML=`<span class="pulse"></span> ${t('ai_thinking')}`;box.appendChild(bot);box.scrollTop=box.scrollHeight;
  AIBUSY=true;AICTL=new AbortController();setGo(true);
  const callTurns=s.turns.slice(0,-1).concat({role:'user',content:aug});let reply='';
  try{const r=await runAI(callTurns,{system:sysFor(mode),signal:AICTL.signal,file:fileObj});reply=r.text}
  catch(e){if(e&&e.code==='cancelled')reply=(e.text||reply)||'(Stopped)';else{const g=(e&&e.text)?null:localGuide(aug);reply=(e&&e.text)||g||aiErr(e);if(g)reply+='\n\n_'+aiErr(e)+'_'}}
  s.turns.push({role:'assistant',content:reply});save();AIBUSY=false;AICTL=null;
  if(bot.isConnected){bot.innerHTML=md(reply);box.scrollTop=box.scrollHeight;setGo(false)}}

ACT.aiSend=()=>aiSend();ACT.aiStop=()=>{if(AICTL)AICTL.abort()};
ACT.aiSug=el=>aiSend(el.dataset.q);
ACT.aiNew=()=>{const m=$('.aichat').dataset.mode;aiStore(m).active=null;ATT=null;save();render()};
ACT.aiHistory=()=>{const m=$('.aichat').dataset.mode,st=aiStore(m);
  sheet(t('ai_sessions_title'),st.sessions.length?`<div class="list">${st.sessions.map(s=>`<div class="item"><button class="grow" data-act="aiOpen" data-id="${s.id}"><b>${esc(s.title)}</b><br><span class="muted small">${ago(s.ts)} · ${s.turns.length} msgs</span></button><button class="icon-btn" data-act="aiDel" data-id="${s.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')}</div>`:`<div class="empty">${t('no_saved_chats')}</div>`)};
ACT.aiOpen=el=>{aiStore($('.aichat').dataset.mode).active=el.dataset.id;closeSheet();render()};
ACT.aiDel=el=>{const st=aiStore($('.aichat').dataset.mode);st.sessions=st.sessions.filter(s=>s.id!==el.dataset.id);if(st.active===el.dataset.id)st.active=null;save();closeSheet();render()};
ACT.aiAttach=()=>sheet(t('attach_title'),`<div class="menu">
  <button data-act="aiCamera">${ic('camera')} Camera</button>
  <button data-act="attKind" data-k="image">${ic('image')} Photo</button>
  <button data-act="attKind" data-k="video">${ic('video')} Video</button>
  <button data-act="attKind" data-k="audio">🎵 Audio</button>
  <button data-act="attKind" data-k="doc">${ic('clip')} Document (PDF, Word, PPT, Excel)</button>
</div>`);

function triggerFallbackCamera(onPhoto){
  const inp=document.createElement('input');
  inp.type='file';
  inp.accept='image/*';
  inp.capture='environment';
  inp.style.display='none';
  document.body.appendChild(inp);
  inp.onchange=async()=>{
    const f=inp.files&&inp.files[0];
    inp.remove();
    if(!f)return;
    try{
      const b64=await imgToData(f,1080,.85);
      onPhoto(b64,f.name||('camera_'+Date.now()+'.jpg'),f);
    }catch(err){toast(curLang()==='sw'?'Imeshindwa kusoma picha.':'Could not read photo.');}
  };
  inp.addEventListener('cancel',()=>inp.remove());
  inp.click();
}

ACT.aiCamera=async()=>{
  closeSheet();
  if(!ST().perm.camera)return toast(t('perm_camera_disabled'));

  function applyPhotoToAI(b64,fname,fileObj){
    ATT={kind:'image',name:fname,type:'image/jpeg',size:fileObj?fileObj.size:0,data:b64,file:fileObj||null};
    const attEl=$('#attBar');
    if(attEl)attEl.innerHTML=`<div class="att" style="align-items:center;gap:.6rem"><img src="${b64}" style="width:44px;height:44px;border-radius:.4rem;object-fit:cover;flex-shrink:0"><span class="grow" style="font-size:.85rem;font-weight:600">📷 ${esc(fname)}</span><button class="icon-btn" data-act="attClear" aria-label="Remove">${ic('x')}</button></div>`;
    toast(curLang()==='sw'?'Picha imepigwa — bonyeza Send kupeleka kwa Agro AI':'Photo captured — tap Send to analyze with Agro AI');
    const ta=$('#aiText');if(ta){ta.focus();ta.placeholder=curLang()==='sw'?'Uliza swali kuhusu picha hii…':'Ask a question about this photo…';}
  }

  /* ---- Live camera viewfinder with getUserMedia ---- */
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    let facingMode='environment';
    let stream=null,track=null,hasTorch=false,torchOn=false;

    const ov=document.createElement('div');
    ov.id='aiCamOverlay';
    ov.style.cssText='position:fixed;inset:0;z-index:99999;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:space-between;touch-action:none;user-select:none';

    const vid=document.createElement('video');
    vid.setAttribute('autoplay','');
    vid.setAttribute('playsinline','');
    vid.muted=true;
    vid.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1';

    const topBar=document.createElement('div');
    topBar.style.cssText='position:relative;z-index:2;width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 16px 12px;background:linear-gradient(rgba(0,0,0,0.6),transparent)';
    topBar.innerHTML=`
      <button id="camClose" style="background:rgba(0,0,0,0.5);border:none;color:#fff;width:44px;height:44px;border-radius:50%;font-size:1.3rem;display:flex;align-items:center;justify-content:center;cursor:pointer">${ic('x')}</button>
      <div style="color:#fff;font-weight:700;font-size:0.95rem;text-shadow:0 1px 4px rgba(0,0,0,0.8)">📷 ${curLang()==='sw'?'Piga Picha ya Zao / Mfugo':'Snap Crop / Livestock'}</div>
      <button id="camTorch" style="background:rgba(0,0,0,0.5);border:none;color:#fff;width:44px;height:44px;border-radius:50%;font-size:1.2rem;display:none;align-items:center;justify-content:center;cursor:pointer">⚡</button>
    `;

    const frame=document.createElement('div');
    frame.style.cssText='position:relative;z-index:2;width:72vw;max-width:320px;aspect-ratio:1/1;border:2px dashed rgba(255,255,255,0.6);border-radius:16px;box-shadow:0 0 0 9999px rgba(0,0,0,0.25);pointer-events:none;display:flex;align-items:flex-end;justify-content:center;padding-bottom:12px';
    frame.innerHTML=`<span style="background:rgba(0,0,0,0.65);color:#fff;font-size:0.75rem;padding:4px 10px;border-radius:20px">${curLang()==='sw'?'Lenga hapa zao au mfugo':'Focus on crop or animal'}</span>`;

    const bottomBar=document.createElement('div');
    bottomBar.style.cssText='position:relative;z-index:2;width:100%;display:flex;justify-content:space-around;align-items:center;padding:16px 20px 28px;background:linear-gradient(transparent,rgba(0,0,0,0.8))';
    bottomBar.innerHTML=`
      <div style="width:50px"></div>
      <button id="camShutter" style="width:76px;height:76px;border-radius:50%;background:#ffffff;border:5px solid rgba(255,255,255,0.4);box-shadow:0 0 20px rgba(0,0,0,0.6);cursor:pointer;outline:none;transition:transform .1s" aria-label="Shutter"></button>
      <button id="camFlip" style="background:rgba(0,0,0,0.5);border:none;color:#fff;width:50px;height:50px;border-radius:50%;font-size:1.4rem;display:flex;align-items:center;justify-content:center;cursor:pointer" title="Flip Camera">🔄</button>
    `;

    ov.appendChild(vid);
    ov.appendChild(topBar);
    ov.appendChild(frame);
    ov.appendChild(bottomBar);
    document.body.appendChild(ov);

    async function openCam(){
      if(stream){stream.getTracks().forEach(tr=>tr.stop());stream=null;}
      try{
        stream=await navigator.mediaDevices.getUserMedia({
          video:{facingMode:{ideal:facingMode},width:{ideal:1920},height:{ideal:1080}},
          audio:false
        });
        vid.srcObject=stream;
        track=stream.getVideoTracks()[0];
        if(track&&track.getCapabilities){
          const caps=track.getCapabilities();
          hasTorch=!!caps.torch;
          const torchBtn=ov.querySelector('#camTorch');
          if(torchBtn)torchBtn.style.display=hasTorch?'flex':'none';
        }
      }catch(e){
        closeCam();
        triggerFallbackCamera(applyPhotoToAI);
      }
    }

    function closeCam(){
      if(stream){stream.getTracks().forEach(tr=>tr.stop());stream=null;}
      vid.srcObject=null;
      if(ov.parentNode)ov.parentNode.removeChild(ov);
    }

    ov.querySelector('#camClose').onclick=()=>closeCam();
    ov.querySelector('#camFlip').onclick=()=>{
      facingMode=facingMode==='environment'?'user':'environment';
      openCam();
    };
    const torchBtn=ov.querySelector('#camTorch');
    if(torchBtn){
      torchBtn.onclick=async()=>{
        if(!track||!hasTorch)return;
        torchOn=!torchOn;
        try{await track.applyConstraints({advanced:[{torch:torchOn}]});torchBtn.style.color=torchOn?'#facc15':'#fff';}catch(err){}
      };
    }

    const shutterBtn=ov.querySelector('#camShutter');
    shutterBtn.onmousedown=()=>shutterBtn.style.transform='scale(0.92)';
    shutterBtn.onmouseup=()=>shutterBtn.style.transform='scale(1)';
    shutterBtn.onclick=()=>{
      if(navigator.vibrate)navigator.vibrate(40);
      const c=document.createElement('canvas');
      c.width=vid.videoWidth||1280;
      c.height=vid.videoHeight||720;
      const ctx=c.getContext('2d');
      if(facingMode==='user'){
        ctx.translate(c.width,0);ctx.scale(-1,1);
      }
      ctx.drawImage(vid,0,0,c.width,c.height);
      const b64=c.toDataURL('image/jpeg',0.85);
      closeCam();

      const fl=document.createElement('div');
      fl.style.cssText='position:fixed;inset:0;background:#fff;z-index:99999;opacity:1;transition:opacity .25s ease-out';
      document.body.appendChild(fl);
      setTimeout(()=>{fl.style.opacity='0';setTimeout(()=>fl.remove(),260);},30);

      applyPhotoToAI(b64,'camera_'+Date.now()+'.jpg',null);
    };

    await openCam();
    return;
  }

  /* Direct fallback if getUserMedia not supported */
  triggerFallbackCamera(applyPhotoToAI);
};
ACT.attKind=async el=>{const kind=el.dataset.k;closeSheet();
  if(kind==='camera'&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  if(kind!=='camera'&&!ST().perm.file)return toast(t('perm_file_disabled'));
  let accept='image/*';
  if(kind==='video')accept='video/*';
  else if(kind==='audio')accept='audio/*';
  else if(kind==='doc')accept='.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.json,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const f=await pickFile(accept,kind==='camera'?'environment':'');if(!f)return;
  if(f.size>25e6)return toast(curLang()==='sw'?'Ukubwa wa faili unazidi 25MB.':'File exceeds 25MB limit.');
  try{
    const b64=await fileToData(f);
    ATT={
      kind:kind==='camera'?'image':kind,
      name:f.name,
      type:f.type||(kind==='doc'?'application/pdf':'application/octet-stream'),
      size:f.size,
      data:b64,
      file:f
    };
    const iconStr=kind==='video'?'🎬':kind==='audio'?'🎧':kind==='doc'?'📄':'📷';
    const b=$('#attBar');
    if(b){
      const isImg=(kind==='image'||kind==='camera');
      b.innerHTML=isImg
        ?`<div class="att" style="align-items:center;gap:.6rem"><img src="${b64}" style="width:44px;height:44px;border-radius:.4rem;object-fit:cover;flex-shrink:0"><span class="grow" style="font-size:.85rem;font-weight:600">${iconStr} ${esc(ATT.name)}</span><button class="icon-btn" data-act="attClear" aria-label="Remove">${ic('x')}</button></div>`
        :`<div class="att"><span style="font-size:1.1rem">${iconStr}</span><span class="grow" style="font-weight:700">${esc(ATT.name)}</span><button class="icon-btn" data-act="attClear" aria-label="Remove">${ic('x')}</button></div>`;
    }
  }catch(e){toast('Could not read file.')}};
ACT.attClear=()=>{ATT=null;$('#attBar').innerHTML=''};

/* --- farm --- */
/* --- farm --- */
function farmHTML(){const k=S.sec,T=SEC[k];
  if(!curUser())return`<div class="empty"><b>${k==='kilimo'?t('tab_my_farm'):t('tab_my_barn')}</b>${t('farm_gate')}<p style="margin-top:1rem"><button class="btn" data-act="go" data-v="account">${t('btn_login_signup')}</button></p></div>`;
  const f=farmOf(k);
  const isSw=curLang()==='sw';
  const tabs=[
    ['kazi',t('tab_tasks',isSw?'Shughuli / Kazi':'Tasks')],
    ['survey',isSw?'Kagua Shamba Sasa':'Survey Farm Now'],
    ['ai',t('tab_ai_advisor',isSw?'Mshauri wa AI':'AI Advisor')]
  ];
  if(!['kazi','survey','ai'].includes(S.ltab)){
    S.ltab='kazi';
  }
  let b='';
  if(S.ltab==='kazi'){
    b=`<form class="row" data-form="task"><input class="field grow" name="text" placeholder="${t('ph_new_task')}" maxlength="120" aria-label="New task"><input class="field" style="width:auto" type="date" name="due" aria-label="Date"><button class="btn">${ic('plus')}</button></form>
    <div class="list" style="margin-top:.6rem">${f.tasks.length?f.tasks.map(t=>`<div class="item"><button class="chk ${t.done?'on':''}" data-act="taskTog" data-id="${t.id}" role="checkbox" aria-checked="${t.done}" aria-label="Complete">${t.done?ic('check'):''}</button><span class="grow ${t.done?'done':''}">${esc(t.text)}${t.due?`<br><span class="muted small">Date: ${esc(t.due)}</span>`:''}</span><button class="icon-btn" data-act="taskDel" data-id="${t.id}" aria-label="Delete">${ic('trash')}</button></div>`).join(''):`<div class="empty"><b>${t('no_tasks')}</b>${t('no_tasks_sub')}</div>`}</div>`;
  }else if(S.ltab==='survey'){
    b=`<div class="survey-wrap">
      <div class="survey-hero">
        <div class="survey-radar"></div>
        <div class="survey-badge">🛰️ ${isSw?'HUDUMA INAYOKUJA':'COMING SOON'}</div>
        <h3 class="survey-title">${isSw?'Huduma Hii kwa Sasa Haipatikani':'This Service is Currently Unavailable'}</h3>
        <p class="survey-desc">${isSw?'Huduma ya "Survey Farm Now" (Kukagua Shamba Moja kwa Moja kwa Satelaiti na Drone za Kisasa) inakuja hivi punde kwenye toleo lijalo la kimataifa!':'Our next-generation "Survey Farm Now" AI satellite and drone multispectral telemetry is coming very soon in our upcoming global release!'}</p>
        <div class="row wrap" style="justify-content:center;gap:.75rem">
          <button class="btn" data-act="surveyNotify" style="background:#84cc16;color:#0f172a;font-weight:800">
            🔔 ${isSw?'Niarifu Huduma Ikitoka':'Notify Me When Available'}
          </button>
          <button class="btn ghost" data-act="ftab" data-t="ai" style="color:#ffffff;border-color:rgba(255,255,255,.3)">
            💬 ${isSw?'Uliza Agro AI Maswali ya Shamba':'Ask Agro AI About Your Farm'}
          </button>
        </div>
      </div>
      <div class="survey-features">
        <div class="survey-feat-card">
          <div class="survey-feat-icon">🛰️</div>
          <div class="survey-feat-info">
            <b>${isSw?'Picha za Satelaiti za NDVI':'Satellite Multispectral NDVI'}</b>
            <p>${isSw?'Kupima afya ya mimea, unene wa majani na maeneo yenye upungufu wa unyevu au virutubisho.':'Continuous high-resolution satellite indexing to track canopy health, nitrogen uptake, and biomass health.'}</p>
          </div>
        </div>
        <div class="survey-feat-card">
          <div class="survey-feat-icon">🛸</div>
          <div class="survey-feat-info">
            <b>${isSw?'Kukodisha Drone za Shambani':'On-Demand Drone Scouting'}</b>
            <p>${isSw?'Weka miadi na waendesha drone walioidhinishwa kwa ajili ya kupiga ramani ya 3D na kupulizia dawa kwa usahihi.':'Book certified local drone pilots for centimeter-accurate 3D topography and targeted micro-spraying.'}</p>
          </div>
        </div>
        <div class="survey-feat-card">
          <div class="survey-feat-icon">🧪</div>
          <div class="survey-feat-info">
            <b>${isSw?'Uchunguzi wa Afya ya Udongo':'Soil Fertility & Moisture AI'}</b>
            <p>${isSw?'Ugunduzi wa kiwango cha pH, unyevu, joto na mapendekezo ya mbolea kulingana na eneo lako.':'AI analysis of soil compaction, pH variance, moisture deficit and precision fertilizer recommendations.'}</p>
          </div>
        </div>
        <div class="survey-feat-card">
          <div class="survey-feat-icon">🐄</div>
          <div class="survey-feat-info">
            <b>${isSw?'Ufuatiliaji wa Mifugo na Malisho':'Pasture & Herd Heatmaps'}</b>
            <p>${isSw?'Kukagua ubora wa nyasi za malisho na uwezo wa kubeba mifugo (carrying capacity) kwa msimu mzima.':'Pasture biomass calculations, rotational grazing optimization and herd movement diagnostics.'}</p>
          </div>
        </div>
      </div>
    </div>`;
  }else{
    b=aiChatHTML(T.my);
  }
  return`<div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ltab===i?'on':''}" data-act="ftab" data-t="${i}">${l}</button>`).join('')}</div>${b}`
}

SECTAB.langu=farmHTML;
ACT.ftab=el=>{S.ltab=el.dataset.t;render()};
ACT.surveyNotify=()=>{toast(curLang()==='sw'?'Asante! Utapokea taarifa pindi Survey Farm Now itakapozinduliwa.':'Thank you! You will be notified as soon as Survey Farm Now launches.')};
FORM.farm=f=>{const o=farmOf(S.sec);['name','size','items','place','notes'].forEach(n=>o[n]=fv(f,n).trim());save();toast(t('saved_toast'));render()};
FORM.task=f=>{const text=fv(f,'text').trim();if(!text)return;farmOf(S.sec).tasks.unshift({id:uid('t'),text,due:fv(f,'due'),done:false});save();render()};
ACT.taskTog=el=>{const t=farmOf(S.sec).tasks.find(x=>x.id===el.dataset.id);if(t){t.done=!t.done;save();render()}};
ACT.taskDel=el=>{const o=farmOf(S.sec);o.tasks=o.tasks.filter(x=>x.id!==el.dataset.id);save();render()};
FORM.ledger=f=>{const a=Math.round(+fv(f,'amt'));if(!(a>0))return toast(curLang()==='en'?'Enter a valid amount.':'Weka kiasi sahihi.');farmOf(S.sec).ledger.push({id:uid('l'),type:fv(f,'type'),label:fv(f,'label').trim(),amt:a,ts:now()});save();render()};
ACT.ledDel=el=>{const o=farmOf(S.sec);o.ledger=o.ledger.filter(x=>x.id!==el.dataset.id);save();render()};
ACT.farmLoc=()=>{if(!navigator.geolocation)return toast('Geolocation is not supported by your browser.');navigator.geolocation.getCurrentPosition(p=>{const o=farmOf(S.sec);o.place=`${(o.place||'').replace(/\s*\(.*?\)\s*$/,'')} (${p.coords.latitude.toFixed(2)}, ${p.coords.longitude.toFixed(2)})`.trim();save();render()},()=>toast('Could not retrieve location. Please allow browser location access.'))};

/* ============ account ============ */
const creatorName=id=>(DB.users[id]&&DB.users[id].name)||'User';
const post=id=>DB.posts.find(p=>p.id===id);
VIEWS.account=()=>{const u=curUser();return u?profileHTML(u):authHTML()};

let PENDING_RESET=null;
const API_ORIGIN=location.protocol==='file:'?'http://127.0.0.1:8000':['5500','8765'].includes(location.port)?`${location.protocol}//${location.hostname}:8000`:'';
const API_BASE=API_ORIGIN;
const AUTH_API_BASE=`${API_BASE}/api/v1`;
const normalizePhone=value=>{let number=value.replace(/[^\d+]/g,'');if(number.startsWith('00'))number='+'+number.slice(2);else if(number.startsWith('0'))number='+255'+number.slice(1);else if(!number.startsWith('+'))number='+'+number;return number};
function maskContact(value,channel){if(channel==='email'){const [name,domain]=value.split('@');return `${name.slice(0,1)}***@${domain}`}return `${'*'.repeat(Math.max(0,value.length-3))}${value.slice(-3)}`}
function passwordField(name,label,autocomplete){return`<label class="lab">${label}<span class="password-field"><input class="field" id="${name}" name="${name}" type="password" required minlength="8" maxlength="100" autocomplete="${autocomplete}"><button type="button" class="icon-btn" data-act="togglePassword" data-target="${name}" aria-label="${t('btn_show_pw')}" title="${t('btn_show_pw')}">${ic('eye')}</button></span></label>`}
async function authPost(path,data){let response;try{response=await fetch(`${AUTH_API_BASE}${path}`,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})}catch(e){throw new Error(t('verification_unavailable'))}const result=await response.json().catch(()=>({}));if(!response.ok){const err=new Error((result.detail&&result.detail.message)||result.detail||(response.status===503||response.status>=500?t('verification_unavailable'):response.status===429?t('otp_retry_later'):t('verification_failed')));err.status=response.status;err.data=result.detail||result;throw err}return result}
async function authGet(path){let response;try{response=await fetch(`${AUTH_API_BASE}${path}`,{method:'GET',credentials:'include',headers:{'Accept':'application/json'}})}catch(e){throw new Error(t('verification_unavailable'))}const result=await response.json().catch(()=>({}));if(!response.ok){const err=new Error((result.detail&&result.detail.message)||result.detail||t('verification_unavailable'));err.status=response.status;err.data=result.detail||result;throw err}return result}
async function communicationsRequest(path,data,method=data?'POST':'GET'){let response;try{response=await fetch(`${AUTH_API_BASE}/communications${path}`,{method,credentials:'include',headers:data?{'Content-Type':'application/json'}:{},body:data?JSON.stringify(data):undefined})}catch(e){throw new Error(t('verification_unavailable'))}const result=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(result.detail||t('verification_unavailable'));error.status=response.status;throw error}return result}
function accountExists(email,phone){return Object.values(DB.users).some(x=>email&&((x.login||'').toLowerCase()===email||(x.email||'').toLowerCase()===email)||phone&&(x.phone&&normalizePhone(x.phone)===phone||x.login&&!x.login.includes('@')&&normalizePhone(x.login)===phone))}
function localAccountForEmail(email){return Object.values(DB.users).find(x=>(x.email||x.login||'').toLowerCase()===email)}
function activateRemoteUser(remote,existing){let u=existing||localAccountForEmail(remote.email);if(!u){u={id:uid('u'),name:remote.name,login:remote.email,email:remote.email,phone:'',salt:uid('s'),hash:'',bio:'',handle:'@'+(remote.name.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,14)||'farmer')+Math.floor(10+Math.random()*90),ts:now()};newUserData(u);DB.users[u.id]=u}u.name=remote.name;u.email=remote.email;u.login=remote.email;u.remoteId=remote.id;u.role=remote.role;DB.session=u.id;save();connectCommunicationSocket();loadRemoteThreads();return u}
async function restoreCommunicationSession(){const existing=curUser();if(!existing||!existing.email)return;try{const result=await communicationsRequest('/me'),remote=result.user;if((existing.email||'').toLowerCase()===remote.email.toLowerCase())activateRemoteUser(remote,existing)}catch(e){if(e.status===401)expireCommunicationSession()}}
function findResetAccount(value){const id=value.trim().toLowerCase();if(id.includes('@')){const account=Object.values(DB.users).find(x=>(x.email||x.login||'').toLowerCase()===id);return account?{account,channel:'email',destination:account.email||account.login}:null}const phone=normalizePhone(id),account=Object.values(DB.users).find(x=>x.phone&&normalizePhone(x.phone)===phone||x.login&&!x.login.includes('@')&&normalizePhone(x.login)===phone);return account?{account,channel:'sms',destination:account.phone||normalizePhone(account.login)}:null}
let REG_ROLE = 'farmer';
let REG_CERT_DOC = null;
let REG_LICENSE_DOC = null;

ACT.regRoleChange = el => {
  REG_ROLE = el.value;
  const box = $('#expertFieldsBox');
  if (box) {
    box.style.display = (REG_ROLE === 'crop_expert' || REG_ROLE === 'livestock_expert') ? 'flex' : 'none';
  }
};

ACT.pickCertDoc = async () => {
  const f = await pickFile('image/*,application/pdf');
  if (!f) return;
  try {
    if (f.type && f.type.startsWith('image/')) {
      REG_CERT_DOC = await imgToData(f, 1200, 0.85);
    } else {
      REG_CERT_DOC = await fileToData(f);
    }
    const p = $('#certPreview');
    if (p) p.innerHTML = `<span class="expert-file-preview">📄 ${esc(f.name || 'Cheti cha Taaluma')} <button type="button" class="icon-btn" data-act="clearCertDoc" style="color:#ef4444">${ic('x')}</button></span>`;
    toast(curLang()==='sw'?'Cheti cha taaluma kimepakiwa!':'Academic certificate attached!');
  } catch(e) { toast('Could not load certificate.'); }
};

ACT.clearCertDoc = () => {
  REG_CERT_DOC = null;
  const p = $('#certPreview');
  if (p) p.innerHTML = '';
};

ACT.pickLicenseDoc = async () => {
  const f = await pickFile('image/*,application/pdf');
  if (!f) return;
  try {
    if (f.type && f.type.startsWith('image/')) {
      REG_LICENSE_DOC = await imgToData(f, 1200, 0.85);
    } else {
      REG_LICENSE_DOC = await fileToData(f);
    }
    const p = $('#licensePreview');
    if (p) p.innerHTML = `<span class="expert-file-preview">📜 ${esc(f.name || 'Leseni ya Kazi')} <button type="button" class="icon-btn" data-act="clearLicenseDoc" style="color:#ef4444">${ic('x')}</button></span>`;
    toast(curLang()==='sw'?'Leseni ya kazi imepakiwa!':'Practicing license attached!');
  } catch(e) { toast('Could not load license.'); }
};

ACT.clearLicenseDoc = () => {
  REG_LICENSE_DOC = null;
  const p = $('#licensePreview');
  if (p) p.innerHTML = '';
};

function authHTML(){const reg=S.auth==='register',login=S.auth==='login';let body='';
  if(S.auth==='forgot')body=`<p class="note" style="margin-bottom:.9rem">${curLang()==='sw'?'Weka anwani ya barua pepe (email) uliyojisajili nayo. Mfumo utatengeneza nambari ya siri ya uhakiki (OTP yenye tarakimu 6) na kuituma kiotomatiki kwenye barua pepe yako.':'Enter your registered email address. The system will automatically generate and send a 6-digit verification code to your email.'}</p><form class="form" data-form="requestReset"><label class="lab">${t('lbl_email')}<input class="field" name="id" type="email" required maxlength="254" placeholder="mfano: mkulima@gmail.com" autocomplete="email"></label><button class="btn">${curLang()==='sw'?'Tuma Nambari ya Uhakiki':'Send Verification Code'}</button><button type="button" class="btn ghost" data-act="backToLogin">${t('btn_change_details')}</button></form>`;
  else if(S.auth==='forgotCode')body=`<p class="note" style="margin-bottom:.9rem">${t('verification_sent_to')} <b>${esc(maskContact(PENDING_RESET.destination,PENDING_RESET.channel))}</b>.<br>${curLang()==='sw'?'Tafadhali kagua barua pepe yako (inbox au spam) kisha ingiza tarakimu 6 za uhakiki hapa:':'Please check your email and enter the 6-digit code below:'}</p><form class="form" data-form="confirmResetCode"><label class="lab">${t('verification_code')}<input class="field" name="code" required inputmode="numeric" pattern="[0-9]{6}" minlength="6" maxlength="6" placeholder="000000" autocomplete="one-time-code" style="font-size:1.35rem;letter-spacing:0.25rem;text-align:center"></label><button class="btn">${curLang()==='sw'?'Thibitisha Nambari':'Verify Code'}</button><div class="row wrap"><button type="button" class="btn ghost sm" data-act="resendResetCode">${t('btn_resend_code')}</button><button type="button" class="btn ghost sm" data-act="backToForgot">${t('btn_change_details')}</button></div></form>`;
  else if(S.auth==='resetPassword')body=`<p class="note" style="margin-bottom:.9rem">${curLang()==='sw'?'Uhakiki umefaulu! Mfumo umekupa ruhusa ya kubadilisha nenosiri. Tafadhali andika nenosiri jipya na kulithibitisha hapa chini:':'Verification successful! You may now set your new password and confirm it below:'}</p><form class="form" data-form="resetPassword">${passwordField('newPw',t('lbl_new_pw'),'new-password')}${passwordField('confirmNewPw',t('lbl_confirm_pw'),'new-password')}<button class="btn">${t('btn_reset_password')}</button></form>`;
  else body=`<div class="tabs" role="tablist"><button class="${login?'on':''}" data-act="authTab" data-t="login">${t('login_tab')}</button><button class="${reg?'on':''}" data-act="authTab" data-t="register">${t('register_tab')}</button></div>
  <form class="form" data-form="auth">
    ${reg ? `
      <label class="lab">${t('lbl_name')} <span style="font-weight:400;color:var(--muted)">(${curLang()==='sw'?'Kama ilivyo NIDA':'As on NIDA'})</span>
        <input class="field" name="name" required maxlength="100" autocomplete="name" placeholder="${curLang()==='sw'?'Jina Kamili':'Full Name'}">
      </label>
      <label class="lab">${t('lbl_email')}
        <input class="field" name="email" type="email" required maxlength="254" autocomplete="email">
      </label>
      <label class="lab">${t('lbl_phone')}
        <input class="field" name="phone" type="tel" maxlength="24" placeholder="+255 7XX XXX XXX" autocomplete="tel">
      </label>
      <label class="lab">${t('lbl_role')}
        <select class="field" name="role" required data-act="regRoleChange">
          <option value="farmer" ${REG_ROLE==='farmer'?'selected':''}>${t('role_farmer')}</option>
          <option value="livestock_keeper" ${REG_ROLE==='livestock_keeper'?'selected':''}>${t('role_livestock_keeper')}</option>
          <option value="crop_expert" ${REG_ROLE==='crop_expert'?'selected':''}>${t('role_crop_expert')}</option>
          <option value="livestock_expert" ${REG_ROLE==='livestock_expert'?'selected':''}>${t('role_livestock_expert')}</option>
        </select>
      </label>
      <p class="muted small">${t('role_note')}</p>

      <!-- Certified Expert Government Verification Section -->
      <div id="expertFieldsBox" class="expert-verify-box" style="display:${(REG_ROLE==='crop_expert'||REG_ROLE==='livestock_expert')?'flex':'none'}">
        <div class="expert-verify-header">
          🏛️ <span>${curLang()==='sw'?'Uhakiki wa Mtaalamu wa Serikali (VCT / Wizara ya Kilimo)':'Government Certified Expert Verification'}</span>
        </div>
        <p class="muted small" style="margin:0">${curLang()==='sw'?'Kulingana na miongozo ya serikali ya Tanzania, wataalamu wote wanatakiwa kuwasilisha nambari ya usajili na vyeti vinavyotambuliwa.':'According to Tanzanian government regulations (VCT / Min of Ag), experts must provide valid credentials and certificates.'}</p>
        
        <label class="lab">${curLang()==='sw'?'Jina Kamili (Kama lilivyo kwenye NIDA / Cheti)':'Full Name (Matching NIDA / Certificate)'}
          <input class="field" name="nida_name" maxlength="100" placeholder="${curLang()==='sw'?'Mfano: Dkt. Juma Ali Mwamba':'e.g. Dr. Juma Ali Mwamba'}">
        </label>

        <label class="lab">${curLang()==='sw'?'Kiwango cha Elimu':'Education Level'}
          <select class="field" name="education_level">
            <option value="Degree">${curLang()==='sw'?'Shahada ya Kwanza (Bachelor Degree)':'Bachelor Degree'}</option>
            <option value="Diploma">${curLang()==='sw'?'Stashahada (Diploma)':'Diploma'}</option>
            <option value="Certificate">${curLang()==='sw'?'Astashahada (Certificate)':'Certificate'}</option>
            <option value="Masters">${curLang()==='sw'?'Shahada ya Uzamili (Masters)':'Masters'}</option>
            <option value="PhD">${curLang()==='sw'?'Shahada ya Uzamivu (PhD)':'PhD'}</option>
          </select>
        </label>

        <label class="lab">${curLang()==='sw'?'Chuo Kikuu / Chuo cha Kilimo au Mifugo':'University or College Name'}
          <input class="field" name="college_name" maxlength="120" placeholder="${curLang()==='sw'?'Mfano: SUA, MATI Uyole, LITA Tengeru':'e.g. SUA, MATI Uyole, LITA Tengeru'}" list="collegeSuggestions">
          <datalist id="collegeSuggestions">
            <option value="Sokoine University of Agriculture (SUA)">
            <option value="MATI Uyole (Mbeya)">
            <option value="MATI Ilonga (Kilosa)">
            <option value="MATI Tumbi (Tabora)">
            <option value="LITA Tengeru (Arusha)">
            <option value="LITA Morogoro">
            <option value="LITA Mpwapwa (Dodoma)">
            <option value="University of Dar es Salaam (UDSM)">
          </datalist>
        </label>

        <label class="lab">${curLang()==='sw'?'Nambari ya Usajili wa Kitaalamu (Registration Number)':'Professional Registration Number'}
          <input class="field" name="reg_number" maxlength="60" placeholder="${curLang()==='sw'?'Mfano: VCT/2023/0481 au AGRI/EXT/904':'e.g. VCT/2023/0481 or AGRI/EXT/904'}">
        </label>

        <label class="lab">${curLang()==='sw'?'Tarehe ya Kumalizika Leseni ya Kazi':'Practicing License Expiry Date'}
          <input class="field" type="date" name="license_expiry">
        </label>

        <div class="expert-file-picker">
          <span class="muted small" style="font-weight:700">${curLang()==='sw'?'Cheti cha Taaluma (Academic Certificate - PDF/Picha)':'Academic Certificate (PDF/Image)'}</span>
          <button type="button" class="expert-file-btn" data-act="pickCertDoc">📁 ${curLang()==='sw'?'Pakia / Piga Picha ya Cheti':'Upload / Snap Certificate'}</button>
          <div id="certPreview">${REG_CERT_DOC ? `<span class="expert-file-preview">📄 Cheti kimepakiwa <button type="button" class="icon-btn" data-act="clearCertDoc" style="color:#ef4444">${ic('x')}</button></span>` : ''}</div>
        </div>

        <div class="expert-file-picker">
          <span class="muted small" style="font-weight:700">${curLang()==='sw'?'Leseni ya Kazi (Practicing License - PDF/Picha)':'Practicing License (PDF/Image)'}</span>
          <button type="button" class="expert-file-btn" data-act="pickLicenseDoc">📁 ${curLang()==='sw'?'Pakia / Piga Picha ya Leseni':'Upload / Snap License'}</button>
          <div id="licensePreview">${REG_LICENSE_DOC ? `<span class="expert-file-preview">📜 Leseni imepakiwa <button type="button" class="icon-btn" data-act="clearLicenseDoc" style="color:#ef4444">${ic('x')}</button></span>` : ''}</div>
        </div>
      </div>
    ` : `
      <label class="lab">${curLang()==='sw'?'Barua Pepe au Jina la Akaunti':'Email Address or Username'}
        <input class="field" name="id" required maxlength="254" autocomplete="username" placeholder="mkulima@gmail.com au @mimi ni mkulima">
      </label>
    `}
    ${passwordField('pw',t('lbl_pw'),reg?'new-password':'current-password')}
    ${reg?passwordField('confirmPw',t('lbl_confirm_pw'),'new-password'):''}
    <button class="btn">${reg?t('register_tab'):t('login_tab')}</button>
    ${login?`<button type="button" class="btn ghost" data-act="forgotPassword">${t('forgot_password')}</button>`:''}
    <p class="note">${t('auth_note')}</p>
  </form>`;
  const title=reg?t('register_title'):login?t('login_title'):t('reset_title');
  return`<div class="view" style="max-width:480px"><h2 style="font:800 2rem var(--font-display);letter-spacing:-.02em">${title}</h2>${body}<p class="muted small" style="margin-top:1rem">${t('guest_note')}</p></div>`}

ACT.authTab=el=>{PENDING_RESET=null;S.auth=el.dataset.t;render()};
ACT.togglePassword=el=>{const input=document.getElementById(el.dataset.target);if(!input)return;const visible=input.type==='password';input.type=visible?'text':'password';el.innerHTML=ic(visible?'eye-off':'eye');el.setAttribute('aria-label',t(visible?'btn_hide_pw':'btn_show_pw'));el.title=t(visible?'btn_hide_pw':'btn_show_pw')};
ACT.forgotPassword=()=>{PENDING_RESET=null;S.auth='forgot';render()};
ACT.backToLogin=()=>{PENDING_RESET=null;S.auth='login';render()};
ACT.backToForgot=()=>{if(PENDING_RESET)delete PENDING_RESET.challengeId;S.auth='forgot';render()};
ACT.resendResetCode=async()=>{if(!PENDING_RESET)return;try{const result=await authPost('/users/password-reset/send',{channel:PENDING_RESET.channel,destination:PENDING_RESET.destination});PENDING_RESET.challengeId=result.challenge_id;toast(curLang()==='sw'?'Nambari mpya imetumwa kwenye barua pepe yako!':'New code sent to your email!')}catch(e){toast(e.message||t('verification_unavailable'))}};

FORM.auth=async f=>{
  const pw=fv(f,'pw');
  if(S.auth==='register'){
    const name=fv(f,'name').trim(),email=fv(f,'email').trim().toLowerCase(),phone=fv(f,'phone').trim()?normalizePhone(fv(f,'phone').trim()):'',role=fv(f,'role'),confirm=fv(f,'confirmPw');
    if(!name)return toast(t('lbl_name'));
    if(pw!==confirm)return toast(t('password_mismatch'));

    let nida_name='',education_level='',college_name='',reg_number='',license_expiry='',cert_doc='',license_doc='';
    if(role==='crop_expert'||role==='livestock_expert'){
      nida_name=fv(f,'nida_name').trim()||name;
      education_level=fv(f,'education_level').trim();
      college_name=fv(f,'college_name').trim();
      reg_number=fv(f,'reg_number').trim();
      license_expiry=fv(f,'license_expiry').trim();
      cert_doc=REG_CERT_DOC||'';
      license_doc=REG_LICENSE_DOC||'';
      if(!college_name)return toast(curLang()==='sw'?'Tafadhali weka Jina la Chuo/Chuo Kikuu.':'Please enter your College or University name.');
      if(!reg_number)return toast(curLang()==='sw'?'Tafadhali weka Nambari ya Usajili wa Kitaalamu (VCT/Wizara).':'Please enter your professional registration number (VCT/Ministry).');
      if(!cert_doc)return toast(curLang()==='sw'?'Tafadhali pakia Cheti chako cha Taaluma (Academic Certificate).':'Please upload your academic certificate.');
    }

    try{
      const payload={name,email,phone,password:pw,role,nida_name,education_level,college_name,reg_number,license_expiry,cert_doc,license_doc};
      const result=await communicationsRequest('/register',payload);
      const localSalt=uid('s'),local={id:uid('u'),name,login:email,email,phone,salt:localSalt,hash:await sha(localSalt+pw),bio:'',handle:'@'+(name.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,14)||'farmer')+Math.floor(10+Math.random()*90),role,status:result.user.status,nida_name,education_level,college_name,reg_number,license_expiry,cert_doc,license_doc,ts:now()};
      newUserData(local);local.ai=DB.guest.ai||{};local.history=DB.guest.history||[];DB.guest={ai:{},history:[]};DB.users[local.id]=local;activateRemoteUser(result.user,local);
      REG_CERT_DOC=null;REG_LICENSE_DOC=null;
      if(result.user.status==='Pending_Verification'){
        toast(curLang()==='sw'?'Usajili umepokelewa! Akaunti yako inasubiri uhakiki wa serikali.':'Registration submitted! Your expert account is pending government verification.');
      }else{
        toast((curLang()==='en'?'Welcome, ':'Karibu, ')+name.split(' ')[0]+'!');
      }
      go('account');
    }catch(e){toast(e.message||t('verification_unavailable'))}
  }else{
    const idVal=fv(f,'id').trim().toLowerCase();
    const local=localAccountForEmail(idVal);
    try{
      let result;
      try{result=await communicationsRequest('/login',{email:idVal,password:pw})}
      catch(e){
        if(e.status!==401||!local||!local.hash||local.hash!==await sha(local.salt+pw))throw e;
        result=await communicationsRequest('/register',{name:local.name,email:idVal,phone:local.phone||'',password:pw,role:local.role||'farmer'});
      }
      activateRemoteUser(result.user,local);
      if(result.user.role==='admin'||idVal==='@mimi ni mkulima'||idVal==='admin@miminikulima.com'){
        toast(curLang()==='sw'?'Karibu kwenye Jopo Kuu la Utawala (Admin Panel)!':'Welcome to Administrator Control Center!');
        return go('admin');
      }
      if(result.user.status==='Pending_Verification'){
        toast(curLang()==='sw'?'Akaunti yako inapitiwa na mamlaka za serikali (VCT/Wizara ya Kilimo).':'Your expert account is under review by government authorities.');
      }else{
        toast((curLang()==='en'?'Welcome back, ':'Karibu tena, ')+(result.user.name||'').split(' ')[0]+'!');
      }
      go('account');
    }catch(e){toast(e.message||t('verification_unavailable'))}
  }
};
FORM.requestReset=async f=>{
  const value=fv(f,'id').trim();
  if(!value)return toast(t('reset_account_missing'));
  let destination=value.toLowerCase();
  let account=localAccountForEmail(destination);
  if(!destination.includes('@')){
    const byName=Object.values(DB.users).find(x=>(x.handle||'').toLowerCase()===destination||(x.handle||'').toLowerCase()==='@'+destination||(x.name||'').toLowerCase()===destination);
    if(byName&&byName.email){
      account=byName;
      destination=byName.email.toLowerCase();
    }else{
      return toast(curLang()==='sw'?'Tafadhali ingiza anwani sahihi ya barua pepe (email).':'Please enter a valid email address.');
    }
  }

  const submitBtn=f.querySelector('button.btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent=curLang()==='sw'?'Inatuma nambari ya siri...':'Sending code...';}

  try{
    const result=await authPost('/users/password-reset/send',{channel:'email',destination});
    PENDING_RESET={accountId:account?account.id:null,channel:'email',destination,challengeId:result.challenge_id};
    S.auth='forgotCode';
    render();
    toast(curLang()==='sw'?'Nambari ya uhakiki imetumwa kwenye barua pepe yako!':'Verification code sent to your email!');
  }catch(e){
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=curLang()==='sw'?'Tuma Nambari ya Uhakiki':'Send Verification Code';}
    toast(e.message||t('verification_unavailable'));
  }
};
FORM.confirmResetCode=async f=>{
  if(!PENDING_RESET)return;
  const code=fv(f,'code').trim();
  if(!code||code.length!==6){
    return toast(curLang()==='sw'?'Tafadhali ingiza nambari zote 6 za uhakiki.':'Please enter all 6 digits of the verification code.');
  }
  const submitBtn=f.querySelector('button.btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent=curLang()==='sw'?'Inathibitisha...':'Verifying...';}
  try{
    const result=await authPost('/users/password-reset/confirm',{challenge_id:PENDING_RESET.challengeId,code});
    PENDING_RESET.resetToken=result.reset_token;
    S.auth='resetPassword';
    render();
    toast(curLang()==='sw'?'Nambari imethibitishwa! Weka nenosiri jipya.':'Code verified! Set your new password.');
  }catch(e){
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=curLang()==='sw'?'Thibitisha Nambari':'Verify Code';}
    toast(e.message||t('verification_failed'));
  }
};
FORM.resetPassword=async f=>{
  if(!PENDING_RESET)return;
  const password=fv(f,'newPw'),confirm=fv(f,'confirmNewPw');
  if(!password||password.length<6){
    return toast(curLang()==='sw'?'Nenosiri lazima liwe na herufi 6 au zaidi.':'Password must be at least 6 characters.');
  }
  if(password!==confirm)return toast(t('password_mismatch'));
  const pending=PENDING_RESET;
  const submitBtn=f.querySelector('button.btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent=curLang()==='sw'?'Inabadilisha nenosiri...':'Updating password...';}

  try{
    const result=await authPost('/users/password-reset/complete',{reset_token:pending.resetToken,new_password:password});
    let account=pending.accountId?DB.users[pending.accountId]:null;
    if(!account){
      account=localAccountForEmail(pending.destination);
    }
    const salt=uid('s'),hash=await sha(salt+password);
    if(account){
      account.salt=salt;
      account.hash=hash;
    }
    // Authenticate and open session
    try{
      const login=await communicationsRequest('/login',{email:pending.destination,password});
      activateRemoteUser(login.user,account);
      PENDING_RESET=null;
      toast(t('reset_success'));
      go('account');
      return;
    }catch(err){
      if(account){
        DB.session=account.id;
        save();
        PENDING_RESET=null;
        toast(t('reset_success'));
        go('account');
        return;
      }
    }
    PENDING_RESET=null;
    toast(t('reset_success'));
    S.auth='login';
    render();
  }catch(e){
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=t('btn_reset_password');}
    toast(e.message||t('verification_failed'));
  }
};

function profileHTML(u){
  const followers=Object.values(DB.users).filter(x=>x.id!==u.id&&x.following.includes(u.id)).length;
  const mine=DB.posts.filter(p=>p.by===u.id).sort((a,b)=>b.ts-a.ts),tabs=[['maudhui',t('tab_posts')],['repost',t('tab_reposts')],['saved',t('tab_saved')],['soko',t('tab_market')]];
  const grid=a=>a.length?`<div class="grid3">${a.map(thumbHTML).join('')}</div>`:`<div class="empty"><b>${t('no_content')}</b>${t('no_content_sub')}</div>`;
  let b;
  if(S.ptab==='maudhui')b=grid(mine);else if(S.ptab==='repost')b=grid(DB.posts.filter(p=>u.reposts.includes(p.id)));
  else if(S.ptab==='saved')b=grid(DB.posts.filter(p=>u.saved.includes(p.id)));
  else b=`<p style="margin-bottom:.6rem"><button class="btn sm" data-act="addListing">${ic('plus')} ${t('btn_add_product')}</button></p>${u.listings.length?`<div class="list">${u.listings.map(l=>`<div class="item">${l.img?`<img src="${l.img}" style="width:48px;height:48px;border-radius:.4rem;object-fit:cover;flex-shrink:0">`:''}` +
    `<span class="grow"><b>${esc(l.name)}</b><br><span class="muted small">${esc(l.qty||'')}${l.place?' · '+esc(l.place):''}</span></span><b>TZS ${money(l.price)}</b>` +
    `<button class="icon-btn" data-act="delListing" data-id="${l.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')}</div>`:
    `<div class="empty"><b>${t('no_products')}</b>${t('no_products_sub')}</div>`}`;

  // Expert verification status banner
  const isExpert=u.role==='crop_expert'||u.role==='livestock_expert';
  const isSw=curLang()==='sw';
  let verifyBanner='';
  if(isExpert){
    const st=u.status||'Pending_Verification';
    if(st==='Pending_Verification'){
      verifyBanner=`<div class="expert-verify-banner pending">
        <span style="font-size:1.6rem">⏳</span>
        <div>
          <b>${isSw?'Akaunti Inapitiwa':'Account Under Review'}</b><br>
          <span class="small">Akaunti yako inapitiwa na mamlaka za serikali (VCT/Wizara ya Kilimo). Utapokea ujumbe thibitisho hivi karibuni.</span>
          ${u.reg_number?`<br><span class="muted small">Nambari ya Usajili: <b>${esc(u.reg_number)}</b></span>`:''}
          ${u.college_name?`<br><span class="muted small">${isSw?'Chuo':'College'}: <b>${esc(u.college_name)}</b></span>`:''}
        </div>
      </div>`;
    } else if(st==='Approved'){
      verifyBanner=`<div class="expert-verify-banner approved">
        <span style="font-size:1.6rem">✅</span>
        <div>
          <b>${isSw?'Mtaalamu Aliyeidhinishwa':'Verified Expert'}</b><br>
          <span class="small">${isSw?'Akaunti yako imehakikiwa na serikali. Unaweza sasa kutoa ushauri wa kitaalamu.':'Your account has been verified by government authorities. You can now provide expert consultations.'}</span>
          ${u.college_name?`<br><span class="muted small">${isSw?'Chuo':'College'}: <b>${esc(u.college_name)}</b> · ${esc(u.education_level||'')}</span>`:''}
        </div>
      </div>`;
    } else if(st==='Rejected'){
      verifyBanner=`<div class="expert-verify-banner rejected">
        <span style="font-size:1.6rem">❌</span>
        <div>
          <b>${isSw?'Akaunti Ilikataliwa':'Application Rejected'}</b><br>
          <span class="small">${isSw?'Ombi lako limekataliwa. Tafadhali wasiliana na msimamizi au wasilisha tena nyaraka sahihi.':'Your application was rejected. Please contact admin or resubmit correct documents.'}</span>
          ${u.rejection_reason?`<br><span class="muted small" style="color:#ef4444">${isSw?'Sababu':'Reason'}: ${esc(u.rejection_reason)}</span>`:''}
        </div>
      </div>`;
    }
  }

  // Admin badge
  const adminBadge=u.role==='admin'?`<div style="margin:.8rem 0;padding:.7rem 1rem;border-radius:12px;background:rgba(234,179,8,.12);border:1.5px solid #eab308;display:flex;align-items:center;gap:.7rem">
    <span style="font-size:1.5rem">🛡️</span>
    <div style="flex:1"><b style="color:#facc15">${isSw?'Msimamizi Mkuu':'Super Administrator'}</b><br><span class="small muted">Full platform control access</span></div>
    <button class="btn sm" data-act="goAdmin" style="background:#eab308;color:#0b141a">${isSw?'Jopo la Utawala':'Admin Panel'}</button>
  </div>`:'';

  return`<div class="view" style="max-width:640px"><div class="row" style="justify-content:flex-end"><button class="icon-btn" data-act="profMenu" aria-label="Profile menu">${ic('more')}</button></div>
  <div class="prof">${av(u.name,'lg',colorOf(u.id))}<h2 style="font:800 1.5rem var(--font-display)">${esc(u.name)}</h2><span class="muted">${esc(u.handle)}</span>${u.role?`<span class="pill">${esc(roleLabel(u.role))}</span>`:''}
  <p style="max-width:40ch">${u.bio?esc(u.bio):'<span class="muted">Add a short bio about yourself.</span>'}</p>
  <div class="counts"><button><b>${mine.length}</b><span class="muted small">${t('stat_posts')}</span></button><button data-act="followSheet"><b>${u.following.length}</b><span class="muted small">${t('stat_following')}</span></button><button data-act="followersSheet"><b>${followers}</b><span class="muted small">${t('stat_followers')}</span></button></div>
  <div class="row wrap" style="justify-content:center"><button class="btn ghost sm" data-act="editProfile">${ic('edit')} ${t('btn_edit_profile')}</button><button class="btn sm" data-act="newPost">${ic('plus')} ${t('btn_new_post')}</button></div></div>
  ${adminBadge}${verifyBanner}
  <div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ptab===i?'on':''}" data-act="ptab" data-t="${i}">${l}</button>`).join('')}</div>${b}</div>`}

ACT.ptab=el=>{S.ptab=el.dataset.t;render()};
ACT.goAdmin=()=>{closeSheet();go('admin')};
ACT.profMenu=()=>{const u=curUser(),isSw=curLang()==='sw';sheet('Profile Menu',`<div class="menu">${u&&u.role==='admin'?`<button data-act="goAdmin">🛡️ ${isSw?'Jopo la Utawala':'Admin Control Panel'}</button>`:''}
  <button data-act="editProfile">${ic('edit')} ${t('btn_edit_profile')}</button>
  <button data-act="startUsernameChange">${ic('user')} ${isSw?'Badilisha Jina la Mtumiaji':'Change Username'}</button>
  <button data-act="followSheet">${ic('users')} ${t('stat_following')}</button>
  <button data-act="ptabGo" data-t="soko">${ic('tag')} ${t('tab_market')}</button>
  <button data-act="openTermsPolicy">${ic('info')} ${isSw?'Vigezo na Masharti':'Terms & Policies'}</button>
  <button data-act="go" data-v="settings">${ic('settings')} ${t('nav_settings')}</button>
  <button data-act="logout">${ic('logout')} ${t('st_logout')}</button>
</div>`);};
ACT.ptabGo=el=>{closeSheet();S.ptab=el.dataset.t;render()};
ACT.editProfile=()=>{const u=curUser(),isSw=curLang()==='sw';sheet(t('btn_edit_profile'),`<form class="form" data-form="profile"><label class="lab">${t('lbl_name')} (Username)<input class="field" name="name" value="${esc(u.name)}" maxlength="60" required readonly style="opacity:0.85;cursor:not-allowed"></label><div style="margin:-.3rem 0 .9rem;display:flex;justify-content:space-between;align-items:center;background:var(--raised);padding:.55rem .75rem;border-radius:10px;gap:.5rem"><span class="small muted">${isSw?'Kubadilisha jina kunahitaji vigezo na uthibitisho wa barua pepe.':'Changing username requires eligibility and email verification.'}</span><button type="button" class="btn sm soft" data-act="startUsernameChange" style="white-space:nowrap">${ic('edit')} ${isSw?'Badilisha':'Change'}</button></div><label class="lab">${t('lbl_notes')} (bio)<textarea class="field" name="bio" maxlength="160">${esc(u.bio)}</textarea></label><button class="btn">${t('btn_save')}</button></form>`)};
FORM.profile=f=>{const u=curUser();u.bio=fv(f,'bio').trim();save();closeSheet();render()};

let PENDING_USER_CHANGE = null;

ACT.startUsernameChange=async()=>{
  const u=curUser();
  if(!u)return needLogin();
  closeSheet();
  try{await communicationsRequest('/me')}catch(e){}
  try{
    const res=await authGet('/users/username/eligibility');
    if(!res.eligible){
      showIneligibleModal(res.criteria);
    }else{
      showUsernameChangeForm();
    }
  }catch(err){
    const criteria=err.data&&err.data.criteria;
    if(criteria){
      showIneligibleModal(criteria);
    }else{
      const ageDays=Math.floor((now()-(u.ts||0))/86400);
      const isSixMonths=ageDays>=180;
      showIneligibleModal([
        {id:'six_months',title:curLang()==='sw'?'Umri wa Akaunti (Miezi 6)':'Account Age (6 Months)',met:isSixMonths,message:isSixMonths?(curLang()==='sw'?'Kigezo kimekamilika.':'Criterion met.'):(curLang()==='sw'?`Akaunti haijafikisha miezi 6 tangu kusajiliwa (imebaki siku ${Math.max(0,180-ageDays)}).`:`Account has not reached 6 months yet (${Math.max(0,180-ageDays)} days remaining).`)},
        {id:'two_weeks_active',title:curLang()==='sw'?'Utendaji Mfululizo (Wiki 2)':'Consecutive Activity (2 Weeks)',met:false,message:curLang()==='sw'?'Akaunti lazima iwe active kwa wiki 2 mfululizo kabla ya kuomba mabadiliko.':'Account must be active for 2 consecutive weeks before requesting change.'},
        {id:'two_months_cooldown',title:curLang()==='sw'?'Muda wa Subira (Miezi 2)':'Cooldown Period (2 Months)',met:true,message:curLang()==='sw'?'Hujabadilisha jina katika miezi 2 iliyopita.':'No recent changes in past 2 months.'}
      ]);
    }
  }
};

function showIneligibleModal(criteria){
  const isSw=curLang()==='sw';
  const items=(criteria||[]).map(c=>`
    <div class="criterion-item ${c.met?'met':'unmet'}">
      <div class="criterion-badge">${c.met?ic('check'):ic('x')}</div>
      <div class="criterion-text">
        <b>${esc(isSw?(c.title||c.id):(c.title_en||c.title||c.id))}</b>
        <p class="small muted">${esc(c.message||c.required||'')}</p>
      </div>
    </div>
  `).join('');

  sheet(isSw?'Vigezo vya Kubadilisha Jina':'Username Change Requirements',`
    <div class="criteria-sheet">
      <div class="criteria-alert">
        <span class="criteria-alert-icon">⚠️</span>
        <div>
          <h4>${isSw?'Vigezo Havijakamilika':'Requirements Not Met'}</h4>
          <p class="small muted">${isSw?'Mfumo umekataa ombi lako kwa sababu akaunti yako haijakidhi vigezo vyote vinavyohitajika kubadilisha jina la mtumiaji:':'The system has declined your request because your account does not currently meet all criteria required to change username:'}</p>
        </div>
      </div>
      <div class="criteria-list">${items}</div>
      <div class="criteria-footer">
        <p class="small muted" style="margin:0">${isSw?'Soma maelekezo kamili ya kubadilisha akaunti na kanuni zote za matumizi ya MIMI NI MKULIMA:':'Read the complete instructions for changing accounts and all community guidelines:'}</p>
        <button type="button" class="btn ghost learn-more-btn" data-act="openTermsPolicy">
          ${ic('info')} ${isSw?'Jifunze Zaidi (Learn More) &rarr;':'Learn More &rarr;'}
        </button>
      </div>
    </div>
  `);
}

function showUsernameChangeForm(){
  const u=curUser(),isSw=curLang()==='sw';
  sheet(isSw?'Badilisha Jina la Mtumiaji':'Change Username',`
    <form class="form" data-form="requestUsernameChange">
      <div class="note" style="border-left:3px solid var(--lime);background:rgba(132,204,22,0.1)">
        <b>${isSw?'🎉 Vigezo Vyote Vimekamilika!':'🎉 All Criteria Met!'}</b>
        <p class="small muted" style="margin:.25rem 0 0">
          ${isSw?`Ingiza jina lako jipya la mtumiaji. Nambari ya uhakiki ya tarakimu 6 (OTP code) itatumwa kwenye barua pepe yako rasmi: <b>${esc(maskContact(u.email||u.login,'email'))}</b>.`:`Enter your new username. A 6-digit verification code will be sent to your registered email: <b>${esc(maskContact(u.email||u.login,'email'))}</b>.`}
        </p>
      </div>
      <label class="lab">${isSw?'Jina Jipya la Mtumiaji (New Username)':'New Username'}
        <input class="field" name="newUsername" minlength="3" maxlength="50" required placeholder="${isSw?'Mf. Rashid_MkulimaBora':'e.g. Rashid_Farmer'}" autocomplete="off">
      </label>
      <button class="btn">${ic('send')} ${isSw?'Tuma Nambari ya Uhakiki':'Send Verification Code'}</button>
    </form>
  `);
}

function showUsernameCodeForm(challengeId,email,newUsername){
  const isSw=curLang()==='sw';
  sheet(isSw?'Uhakiki wa Barua Pepe':'Email Verification',`
    <form class="form" data-form="confirmUsernameChange">
      <p class="note">${isSw?'Nambari ya uhakiki ya tarakimu 6 imetumwa kwenye barua pepe:':'A 6-digit verification code was sent to:'} <b>${esc(email)}</b>. ${isSw?'Inaisha muda baada ya dakika 10.':'Expires in 10 minutes.'}</p>
      <input type="hidden" name="challengeId" value="${esc(challengeId)}">
      <input type="hidden" name="newUsername" value="${esc(newUsername)}">
      <label class="lab">${isSw?'Nambari ya Uhakiki (Verification Code)':'Verification Code'}
        <input class="field" name="code" pattern="[0-9]{6}" minlength="6" maxlength="6" required placeholder="000000" inputmode="numeric" autocomplete="one-time-code" style="font-size:1.4rem;letter-spacing:6px;text-align:center">
      </label>
      <button class="btn">${ic('check')} ${isSw?'Thibitisha na Ubadilishe':'Confirm &amp; Change'}</button>
      <div class="row wrap" style="justify-content:center;margin-top:.4rem">
        <button type="button" class="btn ghost sm" data-act="startUsernameChange">${ic('repeat')} ${isSw?'Anza Upya':'Restart'}</button>
      </div>
    </form>
  `);
}

FORM.requestUsernameChange=async f=>{
  const newUsername=fv(f,'newUsername').trim();
  if(!newUsername)return toast(curLang()==='sw'?'Ingiza jina jipya la mtumiaji.':'Enter a new username.');
  try{
    const res=await authPost('/users/username/request-change',{new_username:newUsername});
    PENDING_USER_CHANGE={challengeId:res.challenge_id,email:res.email,newUsername};
    showUsernameCodeForm(res.challenge_id,res.email,newUsername);
    toast(res.message||(curLang()==='sw'?'Nambari ya uhakiki imetumwa kwenye barua pepe yako!':'Verification code sent to your email!'));
  }catch(err){
    if(err.data&&err.data.criteria){
      showIneligibleModal(err.data.criteria);
    }else{
      toast(err.message||t('verification_unavailable'));
    }
  }
};

FORM.confirmUsernameChange=async f=>{
  const challengeId=fv(f,'challengeId'),code=fv(f,'code').trim(),newUsername=fv(f,'newUsername').trim();
  if(!code)return;
  try{
    const res=await authPost('/users/username/confirm-change',{challenge_id:challengeId,code});
    const u=curUser();
    if(u){
      u.name=newUsername;
      u.handle='@'+newUsername.toLowerCase().replace(/[^a-z0-9]+/g,'');
      DB.posts.forEach(p=>{if(p.by===u.id)p.name=newUsername});
      save();
    }
    closeSheet();
    render();
    toast(res.message||(curLang()==='sw'?'Jina la mtumiaji limebadilishwa kikamilifu!':'Username updated successfully!'));
  }catch(err){
    toast(err.message||t('verification_failed'));
  }
};

ACT.openTermsPolicy=()=>{
  closeSheet();
  go('terms');
};
function followRows(ids,u,emptyKey){
  const people=ids.filter(id=>id!==u.id&&DB.users[id]);
  if(!people.length)return`<div class="empty">${t(emptyKey)}</div>`;
  return`<div class="list">${people.map(id=>{const person=DB.users[id],following=u.following.includes(id),mutual=(person.following||[]).includes(u.id);
    return`<div class="item">${av(person.name,'sm',colorOf(id))}<span class="grow"><button data-act="viewCreator" data-id="${esc(id)}"><b>${esc(person.name)}</b></button><br><span class="muted small">${esc(person.handle||'')}</span>${mutual?`<br><span class="pill">${t('follows_you')}</span>`:''}</span><button class="icon-btn" data-act="messageCreator" data-id="${esc(id)}" aria-label="${t('btn_message')} ${esc(person.name)}" title="${t('btn_message')}">${ic('chat')}</button><button class="btn ghost sm" data-act="follow" data-id="${esc(id)}">${following?t('btn_unfollow'):t('btn_follow_back')}</button></div>`}).join('')}</div>`;
}
ACT.followSheet=()=>{const u=curUser();sheet(t('stat_following'),followRows(u.following,u,'no_following'))};
ACT.followersSheet=()=>{const u=curUser(),followers=Object.values(DB.users).filter(person=>(person.following||[]).includes(u.id)).map(person=>person.id);sheet(t('stat_followers'),followRows(followers,u,'no_followers'))};
ACT.messageCreator=el=>{const u=curUser(),peer=DB.users[el.dataset.id];if(!u||!peer||peer.id===u.id)return;u.chats[peer.id]=u.chats[peer.id]||{id:peer.id,type:'dm',name:peer.name,unread:0,msgs:[]};S.ct='chats';go('chat',{thread:peer.id})};
ACT.logout=async()=>{if(curUser()&&curUser().remoteId)try{await communicationsRequest('/logout',{},'POST')}catch(e){}if(COMM_SOCKET){COMM_SOCKET.onclose=null;COMM_SOCKET.close();COMM_SOCKET=null}clearTimeout(COMM_RETRY);DB.session=null;save();closeSheet();S.thread=null;go('home');toast(t('toast_logged_out'))};
ACT.addListing=()=>{LISTING_IMG=null;sheet(t('btn_add_product'),`<form class="form" data-form="listing"><label class="lab">${t('lbl_prod_name')}<input class="field" name="name" required maxlength="60" placeholder="${t('ph_prod_name')}"></label><label class="lab">${t('lbl_prod_price')}<input class="field" name="price" type="number" min="0" required></label><label class="lab">${t('lbl_prod_qty')}<input class="field" name="qty" maxlength="40" placeholder="${t('ph_prod_qty')}"></label><label class="lab">${t('lbl_prod_place')}<input class="field" name="place" maxlength="60"></label><div class="row" style="gap:.5rem;margin:.4rem 0"><button type="button" class="btn ghost sm" data-act="listingPickPhoto">${ic('image')} Gallery</button><button type="button" class="btn ghost sm" data-act="listingCamera">${ic('camera')} Camera</button><span id="listingImgInfo" class="muted small grow"></span></div><div id="listingImgPreview" style="margin:.4rem 0"></div><button class="btn">${t('btn_add_product')}</button></form>`)};
ACT.listingPickPhoto=async()=>{if(!ST().perm.file)return toast(t('perm_file_disabled'));const f=await pickFile('image/*');if(!f)return;try{LISTING_IMG=await imgToData(f,800,.75);const p=$('#listingImgPreview');const i=$('#listingImgInfo');if(p)p.innerHTML=`<img src="${LISTING_IMG}" style="max-width:100%;max-height:160px;border-radius:.5rem;object-fit:cover">`;if(i)i.textContent='✓ Photo selected';}catch(e){toast('Could not load image.');}};
ACT.listingCamera=async()=>{if(!ST().perm.camera)return toast(t('perm_camera_disabled'));const f=await pickFile('image/*','environment');if(!f)return;try{LISTING_IMG=await imgToData(f,800,.75);const p=$('#listingImgPreview');const i=$('#listingImgInfo');if(p)p.innerHTML=`<img src="${LISTING_IMG}" style="max-width:100%;max-height:160px;border-radius:.5rem;object-fit:cover">`;if(i)i.textContent='✓ Photo captured';}catch(e){toast('Could not capture photo.');}};
FORM.listing=f=>{const img=LISTING_IMG;curUser().listings.unshift({id:uid('l'),name:fv(f,'name').trim(),price:Math.round(+fv(f,'price')),qty:fv(f,'qty').trim(),place:fv(f,'place').trim(),img:img||null,ts:now()});LISTING_IMG=null;save();closeSheet();S.ptab='soko';render()};

/* ============ stream ============ */
const EMO=['😀','😂','😍','👏','🙏','🔥','🌽','🐔','🐄','🌱','💪','👍'];
let STREAM_VIDEO_OBSERVER=null;
let STREAM_MUTED=true;

function soundSvg(muted){
  if(muted){
    return'<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
  }
  return'<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
}

function getVideoDuration(file){
  return new Promise((resolve,reject)=>{
    const v=document.createElement('video');
    v.preload='metadata';
    const blobUrl=URL.createObjectURL(file);
    v.onloadedmetadata=()=>{
      URL.revokeObjectURL(blobUrl);
      resolve(v.duration||0);
    };
    v.onerror=()=>{
      URL.revokeObjectURL(blobUrl);
      reject(new Error('Invalid video'));
    };
    v.src=blobUrl;
  });
}

const AGRI_KEYWORDS=[
  'kilimo','shamba','mazao','mahindi','mpunga','mchele','ngano','mtama','ulezi','viazi','mihogo','ndizi',
  'kahawa','chai','pamba','katani','korosho','parachichi','maembe','machungwa','limao','nanasi','zabibu',
  'papai','nyanya','vitunguu','kabichi','karoti','pilipili','bamia','mchicha','kunde','dengu','maharage',
  'soya','alizeti','ufuta','karanga','michikichi','karafuu','tangawizi','vitunguu saumu','matikiti','uyoga',
  'mbegu','miche','vitalu','mbolea','mboji','samadi','dap','can','urea','npk','palizi','kuvuna','mavuno',
  'umwagiliaji','matandazo','bustani','greenhouse','viuatilifu','dawa','magugu','trekta','jembe','shambani',
  'kulima','mkulima','ufugaji','mifugo','mfugo','ng\'ombe','ngombe','mbuzi','kondoo','nguruwe','kuku','bata',
  'kanga','sungura','samaki','nyuki','punda','farasi','ngamia','banda','machungani','malisho','majani',
  'napier','brachiaria','alfalfa','silage','hay','pumba','mashudu','chanjo','kupe','dipu','daktari','ugani',
  'afisa ugani','maziwa','mayai','asali','ngozi','sufu','kuroiler','sasso','broiler','layer','vifaranga',
  'kufuga','mfugaji','mzinga','farm','farming','crop','crops','harvest','seed','seeds','soil','fertilizer',
  'irrigation','planting','livestock','poultry','cattle','cow','cows','goat','goats','sheep','pig','pigs',
  'chicken','chickens','dairy','beef','pasture','feed','fodder','veterinary','agribusiness','horticulture'
];

const FORBIDDEN_TOPICS=[
  'betting','mkekabet','betway','aviator','casino','kasino','odd','odds','mkeka','sportybet','1xbet','parimatch',
  'porn','xxx','ngono','kudate','sugar mummy','sugar daddy','ubakaji','chama tawala','uchaguzi','mbunge','mgombea',
  'ccm','chadema','act wazalendo','maandamano','crypto','bitcoin','forex','binance','utajiri wa haraka','tuma pesa',
  'bongo flava','wasafi','diamond platnumz','alikiba','tamthilia'
];

async function checkPostContent(text,cap,tag){
  const combined=((text||'')+' '+(cap||'')+' '+(tag||'')).toLowerCase();
  for(const bad of FORBIDDEN_TOPICS){
    if(combined.includes(bad)){
      return{
        allowed:false,
        reason:curLang()==='sw'
          ?`Chapisho limekataliwa: Maudhui haya yanahusu mada zisizoruhusiwa au zisizohusiana na kilimo/ufugaji (${bad}).`
          :`Post rejected: Prohibited or irrelevant topic detected (${bad}).`
      };
    }
  }

  try{
    const res=await fetch(`${API_BASE}/api/v1/ai/moderate-post`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text:text||'',caption:cap||'',tag:tag||'kilimo'})
    });
    if(res.ok){
      const data=await res.json();
      if(data&&typeof data.allowed==='boolean')return data;
    }
  }catch(e){}

  const hasAgri=AGRI_KEYWORDS.some(w=>combined.includes(w));
  if(hasAgri)return{allowed:true,reason:'Maudhui yameidhinishwa.'};
  return{
    allowed:false,
    reason:curLang()==='sw'
      ?'Chapisho limekataliwa: Maudhui haya hayahusiani na Kilimo au Mifugo. Mfumo wa MIMI NI MKULIMA unaruhusu machapisho na video zinazohusu kilimo, mazao, mifugo na ufugaji pekee.'
      :'Post rejected: Content is not related to Agriculture or Livestock. MIMI NI MKULIMA only allows farming and livestock content.'
  };
}

function feedPosts(){const u=curUser(),q=S.stream.q.toLowerCase();let a=DB.posts.slice().sort((x,y)=>y.ts-x.ts);
  if(S.stream.tab==='friends')a=u?a.filter(p=>p.by===u.id||u.following.includes(p.by)):[];
  if(q)a=a.filter(p=>((p.text||'')+' '+(p.caption||'')+' '+p.name+' '+p.tag).toLowerCase().includes(q));return a}

function postHTML(p){const u=curUser(),liked=u&&u.liked.includes(p.id),saved=u&&u.saved.includes(p.id),rep=u&&u.reposts.includes(p.id),own=u&&p.by===u.id,fol=u&&u.following.includes(p.by),s=safeSrc(p.src);
  const filterStyle = p.filter && p.filter !== 'none' ? `filter:${p.filter};` : '';
  const transformStyle = p.transform ? `transform:${p.transform};` : '';
  const effectClass = p.effect && p.effect !== 'none' ? `fx-${p.effect}` : '';
  const stickersHtml = (p.stickers || []).map(st => `<div class="cc-sticker-overlay ${esc(st.pos||'top-right')}">${esc(st.emoji)}</div>`).join('');
  const textBadgeHtml = p.overlayText ? `<div class="tiktok-text-badge ${esc(p.overlayPos||'top')} ${esc(p.overlayStyle||'badge-dark')}">${esc(p.overlayText)}</div>` : '';

  let media = '';
  if(p.kind==='image'&&s){
    media = `<div style="position:relative;width:100%;height:100%;overflow:hidden;background:#000;display:grid;place-items:center">
      <img class="pm ${effectClass}" src="${s}" alt="${esc(p.caption||'Photo')}" style="${filterStyle}${transformStyle}">
      ${textBadgeHtml}
      ${stickersHtml}
    </div>`;
  }else if(p.kind==='video'&&s){
    media = `<div class="tiktok-video-box" data-act="toggleVideoPlay" data-id="${esc(p.id)}">
      <video class="pm stream-video ${effectClass}" id="v_${esc(p.id)}" src="${s}" style="${filterStyle}${transformStyle}" playsinline loop preload="metadata" ${STREAM_MUTED?'muted':''}></video>
      ${textBadgeHtml}
      ${stickersHtml}
      <div class="tiktok-center-icon visible" id="vci_${esc(p.id)}">
        <div class="tiktok-play-disc" aria-label="Play/Pause">
          <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>
        </div>
      </div>
      <button type="button" class="tiktok-mute-btn" data-act="toggleVideoMute" data-id="${esc(p.id)}" aria-label="Sauti">
        <svg class="v-vol-icon" viewBox="0 0 24 24">${soundSvg(STREAM_MUTED)}</svg>
      </button>
      <div class="tiktok-bar" data-act="seekVideo" data-id="${esc(p.id)}">
        <div class="tiktok-progress" id="vp_${esc(p.id)}"></div>
      </div>
    </div>`;
  }else if(p.kind==='video'||p.kind==='image'){
    media = `<div class="pm textcard" style="background:${BGS[0]}"><p>Media file no longer available.</p></div>`;
  }else{
    media = `<div class="pm textcard" style="background:${BGS[p.bg||0]}"><p>${esc(p.text)}</p></div>`;
  }
  return`<section class="post" id="p_${esc(p.id)}" data-id="${esc(p.id)}">${media}
  <div class="pinfo"><div class="by">${av(p.name,'sm',p.color)}<button data-act="viewCreator" data-id="${esc(p.by)}">${esc(p.handle||p.name)}</button>${own?'':`<button class="follow ${fol?'on':''}" data-act="follow" data-id="${esc(p.by)}">${fol?t('btn_following'):t('btn_follow')}</button>`}</div>
  ${(p.kind!=='text'&&p.text)?`<p class="cap">${esc(p.text)}</p>`:''}${p.caption?`<p class="cap">${esc(p.caption)}</p>`:''}${p.seed?'<p class="small" style="opacity:.7">Sample Post</p>':''}</div>
  <div class="acts"><button class="${liked?'on':''}" data-act="like" data-id="${esc(p.id)}" aria-label="Like">${ic('heart')}<span>${(p.likedBy||[]).length}</span></button>
  <button data-act="comments" data-id="${esc(p.id)}" aria-label="Comments">${ic('comment')}<span>${(p.comments||[]).length}</span></button>
  <button data-act="share" data-id="${esc(p.id)}" aria-label="Share">${ic('share')}<span>${t('share_title')}</span></button>
  <button class="sv ${saved?'on':''}" data-act="save" data-id="${esc(p.id)}" aria-label="Bookmark">${ic('bookmark')}<span>${t('tab_saved')}</span></button>
  <button class="rp ${rep?'on':''}" data-act="repost" data-id="${esc(p.id)}" aria-label="Repost">${ic('repeat')}<span>${p.reposts||0}</span></button>
  ${own?`<button data-act="postMenu" data-id="${esc(p.id)}" aria-label="More">${ic('more')}</button>`:''}</div></section>`}

function initStreamVideoPlayer(){
  if(STREAM_VIDEO_OBSERVER)STREAM_VIDEO_OBSERVER.disconnect();
  const videos=document.querySelectorAll('.stream-video');
  if(!videos.length)return;

  STREAM_VIDEO_OBSERVER=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const v=entry.target;
      const id=v.id.replace('v_','');
      const ci=$('#vci_'+CSS.escape(id));
      if(entry.isIntersecting&&entry.intersectionRatio>=0.45){
        v.muted=STREAM_MUTED;
        const playProm=v.play();
        if(playProm){
          playProm.then(()=>{
            if(ci)ci.classList.remove('visible');
          }).catch(()=>{
            v.muted=true;
            v.play().then(()=>{if(ci)ci.classList.remove('visible')}).catch(()=>{});
          });
        }
      }else{
        v.pause();
        if(ci)ci.classList.add('visible');
      }
    });
  },{threshold:[0.2,0.45,0.75]});

  videos.forEach(v=>{
    STREAM_VIDEO_OBSERVER.observe(v);
    const pid=v.id.replace('v_','');
    const p=DB.posts.find(item=>item.id===pid);
    const tStart=(p&&p.trimStart)||0;
    const tEnd=(p&&p.trimEnd)||0;

    v.ontimeupdate=()=>{
      if(tEnd&&tEnd>tStart&&v.currentTime>=tEnd){
        v.currentTime=tStart;
      }
      const prog=$('#vp_'+CSS.escape(pid));
      const dur=tEnd&&tEnd>tStart?(tEnd-tStart):(v.duration||1);
      const curr=tEnd&&tEnd>tStart?Math.max(0,v.currentTime-tStart):v.currentTime;
      if(prog&&dur){
        prog.style.width=((curr/dur)*100)+'%';
      }
    };
  });
}

ACT.toggleVideoPlay=el=>{
  const id=el.dataset.id;
  const v=$('#v_'+CSS.escape(id));
  if(!v)return;
  const ci=$('#vci_'+CSS.escape(id));
  if(v.paused){
    v.play().then(()=>{
      if(ci)ci.classList.remove('visible');
    }).catch(()=>{});
  }else{
    v.pause();
    if(ci)ci.classList.add('visible');
  }
};

ACT.toggleVideoMute=(el,e)=>{
  if(e&&e.stopPropagation)e.stopPropagation();
  STREAM_MUTED=!STREAM_MUTED;
  document.querySelectorAll('.stream-video').forEach(v=>{
    v.muted=STREAM_MUTED;
  });
  document.querySelectorAll('.tiktok-mute-btn .v-vol-icon').forEach(icon=>{
    icon.innerHTML=soundSvg(STREAM_MUTED);
  });
};

ACT.seekVideo=(el,e)=>{
  if(e&&e.stopPropagation)e.stopPropagation();
  const id=el.dataset.id;
  const v=$('#v_'+CSS.escape(id));
  if(!v||!v.duration)return;
  const rect=el.getBoundingClientRect();
  const clickX=e.clientX-rect.left;
  const ratio=Math.max(0,Math.min(1,clickX/rect.width));
  v.currentTime=ratio*v.duration;
};

VIEWS.stream=()=>{const a=feedPosts(),q=S.stream.q.trim();
  return`<div class="stream fillabs" data-pal="dark"><div class="stop"><div class="tabs" role="tablist"><button class="${S.stream.tab==='you'?'on':''}" data-act="sTab" data-t="you">${t('stream_tab_you')}</button><button class="${S.stream.tab==='friends'?'on':''}" data-act="sTab" data-t="friends">${t('stream_tab_friends')}</button></div>
  <form class="searchbar" data-form="ssearch" role="search">${ic('search')}<input name="q" value="${esc(S.stream.q)}" placeholder="${t('search_stream_ph')}" aria-label="Search content" autocomplete="off"></form><button class="icon-btn" data-act="newPost" aria-label="New post">${ic('plus')}</button>
  ${q?`<div class="stream-engines"><span>${t('stream_search_web')}</span>${engines(q)}</div>`:''}</div>
  ${a.length?`<div class="feed" id="feed">${a.map(postHTML).join('')}</div>`:`<div class="stream-empty empty"><b>${S.stream.tab==='friends'?(curUser()?'Not following anyone yet':t('farm_login_btn')):t('no_stream_results')}</b><span>${S.stream.tab==='friends'?t('no_stream_friends'):'Try searching for another topic or create your own post.'}</span></div>`}</div>`};

POST.stream=()=>{const id=S.stream.focus;if(id){const el=$('#p_'+CSS.escape(id));if(el)el.scrollIntoView();S.stream.focus=null}
  setTimeout(initStreamVideoPlayer,60);
};
ACT.sTab=el=>{S.stream.tab=el.dataset.t;render()};
FORM.ssearch=f=>{S.stream.q=fv(f,'q').trim();render()};
ACT.openPost=el=>{S.stream={tab:'you',q:'',focus:el.dataset.id};go('stream')};
function refreshPost(id){const p=post(id),el=$('#p_'+CSS.escape(id));if(p&&el){const tEl=document.createElement('div');tEl.innerHTML=postHTML(p);el.replaceWith(tEl.firstElementChild);setTimeout(initStreamVideoPlayer,60)}}
const refreshBy=by=>DB.posts.filter(p=>p.by===by).forEach(p=>refreshPost(p.id));

ACT.like=el=>{if(needLogin('Please log in to like posts.'))return;const u=curUser(),p=post(el.dataset.id);if(!p)return;p.likedBy=p.likedBy||[];u.liked=u.liked||[];const i=p.likedBy.indexOf(u.id);if(i<0){p.likedBy.push(u.id);u.liked.push(p.id)}else{p.likedBy.splice(i,1);u.liked=u.liked.filter(x=>x!==p.id)}save();refreshPost(p.id)};
ACT.save=el=>{if(needLogin('Please log in to save posts.'))return;const u=curUser(),id=el.dataset.id;u.saved=u.saved||[];if(u.saved.includes(id))u.saved=u.saved.filter(x=>x!==id);else{u.saved.push(id);toast(t('toast_saved'))}save();refreshPost(id)};
ACT.repost=el=>{if(needLogin('Please log in to repost.'))return;const u=curUser(),p=post(el.dataset.id);if(!p)return;u.reposts=u.reposts||[];p.reposts=p.reposts||0;if(u.reposts.includes(p.id)){u.reposts=u.reposts.filter(x=>x!==p.id);p.reposts=Math.max(0,p.reposts-1)}else{u.reposts.push(p.id);p.reposts++;toast(t('toast_reposted'))}save();closeSheet();refreshPost(p.id)};
ACT.follow=el=>{if(needLogin('Please log in to follow creators.'))return;const u=curUser(),id=el.dataset.id;if(id===u.id)return;u.following=u.following.includes(id)?u.following.filter(x=>x!==id):u.following.concat(id);save();if(el.closest('.sheet'))closeSheet();if(S.view==='stream')refreshBy(id);else if(S.view==='account')render()};

ACT.viewCreator=el=>{const id=el.dataset.id,lu=DB.users[id],u=curUser();const n=creatorName(id),cnt=DB.posts.filter(p=>p.by===id).length;
  if(lu&&lu.id!==(u&&u.id)&&!lu.priv.allowProfile)return sheet(n,'<div class="empty"><b>Private Profile</b>This creator has set their profile to private.</div>');
  const bio=lu?(lu.priv.shareInfo||(u&&u.id===lu.id)?lu.bio:''):'';
  sheet(n,`<div class="prof">${av(n,'lg',colorOf(id))}<b>${esc(lu?lu.handle:'')}</b>${bio?`<p>${esc(bio)}</p>`:''}<span class="muted small">${t('stat_posts')}: ${cnt}</span>${u&&u.id!==id?`<button class="btn sm" data-act="follow" data-id="${esc(id)}">${u.following.includes(id)?t('btn_following'):t('btn_follow')}</button>`:''}</div>`)};

ACT.comments=el=>{const p=post(el.dataset.id);if(!p)return;sheet(t('comments_title'),`<div id="cmList">${cmList(p)}</div><div class="emojis" role="group" aria-label="Emoji">${EMO.map(e=>`<button type="button" data-act="emo" data-e="${e}" aria-label="Emoji ${e}">${e}</button>`).join('')}</div><form class="row" data-form="comment" data-id="${esc(p.id)}"><input class="field grow" name="t" placeholder="${t('ph_comment')}" maxlength="300" aria-label="Comment" autocomplete="off"><button class="btn" aria-label="Send">${ic('send')}</button></form>`)};
const cmList=p=>(p.comments||[]).length?p.comments.map(c=>`<div class="cm">${av(c.name,'sm',colorOf(c.by))}<div><b>${esc(c.name)}</b> <span class="muted small">${ago(c.ts)}</span><p>${esc(c.text)}</p></div></div>`).join(''):'<div class="empty">No comments yet. Be the first to comment.</div>';
FORM.comment=f=>{if(needLogin('Please log in to comment.'))return;const p=post(f.dataset.id),tVal=fv(f,'t').trim();if(!p||!tVal)return;const u=curUser();p.comments=p.comments||[];p.comments.push({id:uid('c'),by:u.id,name:u.name,text:tVal,ts:now()});save();$('#cmList').innerHTML=cmList(p);f.reset();refreshPost(p.id)};
ACT.emo=el=>{const i=$('.sheet input[name=t]')||$('#msgText');if(i){i.value+=el.dataset.e;i.focus()}};

ACT.share=el=>{const p=post(el.dataset.id);if(!p)return;const url=location.href.split('#')[0]+'#post='+p.id,txt=encodeURIComponent(((p.text||p.caption||'')+' — MIMI NI MKULIMA').slice(0,140)),eu=encodeURIComponent(url);
  sheet(t('share_title'),`<div class="menu"><button data-act="copyLink" data-url="${esc(url)}">${ic('link')} ${t('btn_copy_link')}</button><button data-act="repost" data-id="${esc(p.id)}">${ic('repeat')} ${t('btn_repost')}</button></div>
  <div class="sharegrid"><button data-act="shareChat" data-id="${esc(p.id)}"><span class="ci">${ic('chat')}</span>${t('nav_chat')}</button>
  <a href="https://wa.me/?text=${txt}%20${eu}" target="_blank" rel="noopener noreferrer"><span class="ci">${ic('phone')}</span>WhatsApp</a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=${eu}" target="_blank" rel="noopener noreferrer"><span class="ci"><b>f</b></span>Facebook</a>
  <button data-act="shareIG" data-url="${esc(url)}"><span class="ci"><b>IG</b></span>Instagram</button>
  <button data-act="shareMore" data-url="${esc(url)}" data-t="${esc((p.text||p.caption||'').slice(0,100))}"><span class="ci">${ic('more')}</span>More</button></div>`)};

ACT.copyLink=async el=>{toast(await copyText(el.dataset.url)?t('toast_link_copied'):'Failed to copy link')};
ACT.shareIG=async el=>{await copyText(el.dataset.url);toast('Link copied. Paste into Instagram.')};
ACT.shareMore=async el=>{if(navigator.share){try{await navigator.share({title:'MIMI NI MKULIMA',text:el.dataset.t,url:el.dataset.url})}catch(e){}}else toast(await copyText(el.dataset.url)?t('toast_link_copied'):'Sharing not supported on this browser.')};
ACT.shareChat=el=>{if(needLogin())return;const u=curUser(),id=el.dataset.id;sheet('Share to Chat',`<div class="list">${u.contacts.filter(c=>!c.blocked).map(c=>`<button class="item" data-act="shareTo" data-c="${c.id}" data-id="${esc(id)}">${av(c.name,'sm',colorOf(c.id))}<span class="grow">${esc(c.name)}</span></button>`).join('')}</div>`)};
ACT.shareTo=el=>{const p=post(el.dataset.id);if(!p)return;const url=location.href.split('#')[0]+'#post='+p.id;closeSheet();sendMsg(el.dataset.c,`${p.text||p.caption||'Post'}\n${url}`);toast('Shared to chat')};
ACT.postMenu=el=>sheet('Post Menu',`<div class="menu"><button data-act="editPost" data-id="${esc(el.dataset.id)}">${ic('edit')} Edit post</button><button data-act="delPost" data-id="${esc(el.dataset.id)}">${ic('trash')} Delete post</button></div>`);
ACT.editPost=el=>{const p=post(el.dataset.id);sheet('Edit Post',`<form class="form" data-form="editpost" data-id="${esc(p.id)}"><label class="lab">Message<textarea class="field" name="text" maxlength="200">${esc(p.text||'')}</textarea></label><label class="lab">Caption<input class="field" name="cap" maxlength="120" value="${esc(p.caption||'')}"></label><button class="btn">Save</button></form>`)};
FORM.editpost=f=>{const p=post(f.dataset.id);if(!p)return;p.text=fv(f,'text').trim();p.caption=fv(f,'cap').trim();save();closeSheet();refreshPost(p.id)};
ACT.delPost=el=>{DB.posts=DB.posts.filter(p=>p.id!==el.dataset.id);save();closeSheet();render();toast('Post deleted')};

let NP=null;
let CAPCUT_STATE=null;
let CAPCUT_HISTORY=[];
let CAPCUT_HISTORY_INDEX=-1;

const CAPCUT_FILTERS=[
  {id:'none',label:'Normal (Asilia)'},
  {id:'lush',label:'Lush Green 🌱'},
  {id:'warm',label:'Golden Sun ☀️'},
  {id:'cinema',label:'Cinema Pro 🎬'},
  {id:'vintage',label:'Vintage 90s 📽️'},
  {id:'bw',label:'B&W Noir 🖤'},
  {id:'morning',label:'Morning Sunrise 🌅'},
  {id:'rain',label:'Rain & Mist 🌧️'}
];
const AGRO_FILTERS=CAPCUT_FILTERS;

const CAPCUT_EFFECTS=[
  {id:'none',label:'None'},
  {id:'zoom',label:'Zoom Pulse 🔍'},
  {id:'shake',label:'Camera Shake 💥'},
  {id:'flash',label:'Glow Flash ✨'},
  {id:'glitch',label:'Glitch FX ⚡'},
  {id:'grain',label:'Film Grain 🎞️'},
  {id:'rgb',label:'RGB Split 🌈'},
  {id:'neon',label:'Neon Glow 💡'}
];
const AGRO_EFFECTS=CAPCUT_EFFECTS;

const CAPCUT_TRANSITIONS=[
  {id:'none',label:'None'},
  {id:'fade',label:'Fade to Black 🎬'},
  {id:'dissolve',label:'Cross Dissolve ✨'},
  {id:'zoomIn',label:'Zoom In 🔍'},
  {id:'slideLeft',label:'Slide Left ⬅️'},
  {id:'wipe',label:'Wipe Right ➡️'},
  {id:'flashWhite',label:'Flash White ⚡'}
];
const AGRO_TRANSITIONS=CAPCUT_TRANSITIONS;

const CAPCUT_STICKERS=[
  {id:'corn',emoji:'🌽',label:'Mahindi'},
  {id:'cow',emoji:'🐮',label:"Ng'ombe"},
  {id:'chicken',emoji:'🐔',label:'Kuku'},
  {id:'sprout',emoji:'🌱',label:'Mche'},
  {id:'tractor',emoji:'🚜',label:'Trekta'},
  {id:'fire',emoji:'🔥',label:'Moto'},
  {id:'100',emoji:'💯',label:'Uhakika'},
  {id:'pin',emoji:'📍',label:'Eneo'},
  {id:'rice',emoji:'🌾',label:'Mpunga'},
  {id:'tomato',emoji:'🍅',label:'Nyanya'},
  {id:'goat',emoji:'🐐',label:'Mbuzi'},
  {id:'fish',emoji:'🐟',label:'Samaki'},
  {id:'coffee',emoji:'☕',label:'Kahawa'},
  {id:'banana',emoji:'🍌',label:'Ndizi'},
  {id:'bee',emoji:'🐝',label:'Nyuki'},
  {id:'tz',emoji:'🇹🇿',label:'Tanzania'}
];

const BADGE_STYLES=[
  {id:'badge-dark',label:'Mweusi (Dark)'},
  {id:'badge-green',label:'Kijani (Farm)'},
  {id:'badge-yellow',label:'Njano (Gold)'},
  {id:'badge-red',label:'Mwekundu (Alert)'},
  {id:'badge-glass',label:'Kioo (Glass)'}
];

const BADGE_POS=[
  {id:'top',label:'Juu'},
  {id:'center',label:'Katikati'},
  {id:'bottom',label:'Chini'}
];

const TEXT_FONTS=[
  {id:'font-system',label:'System Bold'},
  {id:'font-impact',label:'Impact Pro'},
  {id:'font-script',label:'Script Font'},
  {id:'font-grotesk',label:'Grotesk'},
  {id:'font-rounded',label:'Rounded'},
  {id:'font-serif',label:'Serif Classic'}
];

const FARM_SUBTITLES=[
  '🚜 Mbinu Mpya ya Kilimo Bora',
  '🌱 Ushauri wa Kisasa wa Mbegu',
  '📈 Bei za Soko la Mazao Leo',
  '💧 Umwagiliaji Makini wa Maji',
  '🐮 Lishe Bora ya Mifugo',
  '🐔 Ufugaji wa Kuku wa Kisasa',
  '🌿 Dawa Asilia za Kuzuia Wadudu'
];

function fmtSec(sec){
  const s=Math.round(sec||0);
  const m=Math.floor(s/60);
  const r=s%60;
  return`${m}:${r<10?'0':''}${r}`;
}

function fmtTimecode(sec){
  const total=sec||0;
  const m=Math.floor(total/60);
  const s=Math.floor(total%60);
  const f=Math.floor((total%1)*30);
  return`${m<10?'0':''}${m}:${s<10?'0':''}${s}:${f<10?'0':''}${f}`;
}

/* Web Audio API Sound Effects Synthesizer */
let CC_AUDIO_CTX=null;
function playCapCutSFX(type){
  try{
    if(!CC_AUDIO_CTX){
      CC_AUDIO_CTX=new (window.AudioContext||window.webkitAudioContext)();
    }
    const ctx=CC_AUDIO_CTX;
    if(ctx.state==='suspended')ctx.resume();
    const t=ctx.currentTime;

    if(type==='bell'){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sine';
      osc.frequency.setValueAtTime(1046.5,t);
      osc.frequency.exponentialRampToValueAtTime(1318.5,t+0.08);
      gain.gain.setValueAtTime(0.3,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+1.1);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+1.1);
    }else if(type==='whoosh'){
      const bufferSize=ctx.sampleRate*0.35;
      const buffer=ctx.createBuffer(1,bufferSize,ctx.sampleRate);
      const data=buffer.getChannelData(0);
      for(let i=0;i<bufferSize;i++)data[i]=Math.random()*2-1;
      const noise=ctx.createBufferSource();
      noise.buffer=buffer;
      const filter=ctx.createBiquadFilter();
      filter.type='bandpass';
      filter.frequency.setValueAtTime(200,t);
      filter.frequency.exponentialRampToValueAtTime(2200,t+0.18);
      filter.frequency.exponentialRampToValueAtTime(350,t+0.35);
      const gain=ctx.createGain();
      gain.gain.setValueAtTime(0.01,t);
      gain.gain.linearRampToValueAtTime(0.28,t+0.18);
      gain.gain.linearRampToValueAtTime(0.001,t+0.35);
      noise.connect(filter);filter.connect(gain);gain.connect(ctx.destination);
      noise.start(t);noise.stop(t+0.35);
    }else if(type==='boom'){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sine';
      osc.frequency.setValueAtTime(120,t);
      osc.frequency.exponentialRampToValueAtTime(32,t+0.55);
      gain.gain.setValueAtTime(0.45,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+0.6);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+0.6);
    }else if(type==='rooster'){
      const osc1=ctx.createOscillator(),osc2=ctx.createOscillator(),gain=ctx.createGain();
      osc1.type='sawtooth';osc2.type='triangle';
      osc1.frequency.setValueAtTime(440,t);
      osc1.frequency.linearRampToValueAtTime(660,t+0.2);
      osc1.frequency.linearRampToValueAtTime(880,t+0.4);
      osc1.frequency.linearRampToValueAtTime(550,t+0.65);
      osc2.frequency.setValueAtTime(880,t);
      osc2.frequency.linearRampToValueAtTime(1320,t+0.2);
      gain.gain.setValueAtTime(0.2,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+0.7);
      osc1.connect(gain);osc2.connect(gain);gain.connect(ctx.destination);
      osc1.start(t);osc2.start(t);osc1.stop(t+0.7);osc2.stop(t+0.7);
    }else if(type==='cow'){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sawtooth';
      osc.frequency.setValueAtTime(135,t);
      osc.frequency.linearRampToValueAtTime(110,t+0.5);
      osc.frequency.linearRampToValueAtTime(90,t+1.0);
      gain.gain.setValueAtTime(0.22,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+1.05);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+1.05);
    }else if(type==='tractor'){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='square';
      osc.frequency.setValueAtTime(45,t);
      osc.frequency.linearRampToValueAtTime(75,t+0.4);
      osc.frequency.linearRampToValueAtTime(50,t+0.8);
      gain.gain.setValueAtTime(0.25,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+0.85);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+0.85);
    }else if(type==='click'){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sine';
      osc.frequency.setValueAtTime(1700,t);
      gain.gain.setValueAtTime(0.25,t);
      gain.gain.exponentialRampToValueAtTime(0.001,t+0.06);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+0.06);
    }
  }catch(e){}
}

function pushCapCutHistory(){
  if(!CAPCUT_STATE)return;
  const snap=JSON.stringify({
    aspectRatio:CAPCUT_STATE.aspectRatio,
    speed:CAPCUT_STATE.speed,
    scale:CAPCUT_STATE.scale,
    rotation:CAPCUT_STATE.rotation,
    flipH:CAPCUT_STATE.flipH,
    filterId:CAPCUT_STATE.filterId,
    filterIntensity:CAPCUT_STATE.filterIntensity,
    adjust:CAPCUT_STATE.adjust,
    effect:CAPCUT_STATE.effect,
    transition:CAPCUT_STATE.transition,
    overlayText:CAPCUT_STATE.overlayText,
    overlayPos:CAPCUT_STATE.overlayPos,
    overlayStyle:CAPCUT_STATE.overlayStyle,
    textFont:CAPCUT_STATE.textFont,
    textSize:CAPCUT_STATE.textSize,
    stickers:CAPCUT_STATE.stickers,
    audioTrack:CAPCUT_STATE.audioTrack,
    volume:CAPCUT_STATE.volume,
    muted:CAPCUT_STATE.muted,
    trimStart:CAPCUT_STATE.trimStart,
    trimEnd:CAPCUT_STATE.trimEnd,
    safeArea:CAPCUT_STATE.safeArea,
    resolution:CAPCUT_STATE.resolution
  });
  if(CAPCUT_HISTORY_INDEX>=0&&CAPCUT_HISTORY[CAPCUT_HISTORY_INDEX]===snap)return;
  CAPCUT_HISTORY=CAPCUT_HISTORY.slice(0,CAPCUT_HISTORY_INDEX+1);
  CAPCUT_HISTORY.push(snap);
  CAPCUT_HISTORY_INDEX=CAPCUT_HISTORY.length-1;
}

function computeCapCutFilter(st){
  if(!st)return 'none';
  const fid=st.filterId||'none';
  const intensity=(st.filterIntensity!==undefined?st.filterIntensity:100)/100;
  const adj=st.adjust||{};
  const b=1+((adj.brightness||0)/100);
  const c=1+((adj.contrast||0)/100);
  const s=1+((adj.saturation||0)/100);
  const w=(adj.warmth||0);
  const h=1+((adj.highlights||0)/150);
  const sh=1+((adj.shadows||0)/150);

  let presetCss='';
  if(fid==='lush')presetCss=`saturate(${1+0.6*intensity}) contrast(${1+0.12*intensity}) brightness(${1+0.04*intensity})`;
  else if(fid==='warm')presetCss=`sepia(${0.38*intensity}) saturate(${1+0.38*intensity}) hue-rotate(${-12*intensity}deg)`;
  else if(fid==='cinema')presetCss=`contrast(${1+0.3*intensity}) saturate(${1+0.2*intensity}) brightness(${1-0.05*intensity})`;
  else if(fid==='vintage')presetCss=`sepia(${0.72*intensity}) contrast(${1+0.14*intensity}) brightness(${0.95})`;
  else if(fid==='bw')presetCss=`grayscale(${1*intensity}) contrast(${1+0.25*intensity})`;
  else if(fid==='morning')presetCss=`saturate(${1+0.25*intensity}) sepia(${0.2*intensity}) brightness(${1+0.1*intensity})`;
  else if(fid==='rain')presetCss=`hue-rotate(${15*intensity}deg) saturate(${1-0.2*intensity}) contrast(${1+0.1*intensity})`;

  let adjustCss=`brightness(${(b*h).toFixed(2)}) contrast(${(c*sh).toFixed(2)}) saturate(${s.toFixed(2)})`;
  if(w>0)adjustCss+=` sepia(${(w/140).toFixed(2)}) hue-rotate(${(-w/6).toFixed(1)}deg)`;
  else if(w<0)adjustCss+=` hue-rotate(${(-w/5).toFixed(1)}deg)`;

  return `${presetCss} ${adjustCss}`.trim()||'none';
}

function computeCapCutTransform(st){
  if(!st)return'';
  const rot=st.rotation||0;
  const scaleX=st.flipH?-1:1;
  const sc=(st.scale||100)/100;
  return `rotate(${rot}deg) scaleX(${scaleX}) scale(${sc})`;
}

function renderStickersHtml(stickers){
  if(!stickers||!stickers.length)return'';
  return stickers.map(s=>`<div class="cc-sticker-overlay ${esc(s.pos||'top-right')}">${esc(s.emoji)}</div>`).join('');
}

function renderCapCutSubpanel(st){
  const tab=st.activeTab||'edit';
  const isVideo=st.mediaType==='video';

  if(tab==='edit'){
    return `
      <div class="cc-subpanel-title">Aspect Ratio & Format</div>
      <div class="cc-row-controls">
        <button type="button" class="cc-btn-pill ${st.aspectRatio==='9-16'?'active':''}" data-act="ccRatio" data-r="9-16">📱 9:16 (TikTok/Reel)</button>
        <button type="button" class="cc-btn-pill ${st.aspectRatio==='1-1'?'active':''}" data-act="ccRatio" data-r="1-1">⏹️ 1:1 (Square/Feed)</button>
        <button type="button" class="cc-btn-pill ${st.aspectRatio==='16-9'?'active':''}" data-act="ccRatio" data-r="16-9">🖥️ 16:9 (Landscape)</button>
        <button type="button" class="cc-btn-pill ${st.aspectRatio==='4-5'?'active':''}" data-act="ccRatio" data-r="4-5">📸 4:5 (Portrait)</button>
        <button type="button" class="cc-btn-pill ${st.aspectRatio==='21-9'?'active':''}" data-act="ccRatio" data-r="21-9">🎬 21:9 (Cinema)</button>
      </div>

      <div class="cc-slider-row" style="margin-top:.3rem">
        <span>Scale / Zoom:</span>
        <input type="range" min="70" max="150" value="${st.scale||100}" data-act="ccScaleChange">
        <span id="ccScaleLbl">${st.scale||100}%</span>
      </div>

      ${isVideo?`
      <div class="cc-subpanel-title" style="margin-top:.4rem">Video Speed Ramp</div>
      <div class="cc-row-controls">
        ${[0.5,1.0,1.5,2.0,3.0].map(sp=>`<button type="button" class="cc-btn-pill ${st.speed===sp?'active':''}" data-act="ccSpeed" data-v="${sp}">${sp}x</button>`).join('')}
      </div>`:''}

      <div class="cc-subpanel-title" style="margin-top:.4rem">Transform & Tools</div>
      <div class="cc-row-controls">
        <button type="button" class="cc-btn-pill" data-act="ccRotate">🔄 Rotate 90°</button>
        <button type="button" class="cc-btn-pill ${st.flipH?'active':''}" data-act="ccFlip">↔️ Flip H</button>
        ${isVideo?`<button type="button" class="cc-btn-pill" data-act="ccSplitClip" style="color:#00f2fe;border-color:#00f2fe">✂️ Split at Playhead</button>`:''}
      </div>
    `;
  }

  if(tab==='text'){
    return `
      <div class="cc-subpanel-title">✍️ Agro Studio Text & Subtitles</div>
      <input class="field" id="ccTextInput" maxlength="90" placeholder="e.g. Best farming techniques & pest control..." value="${esc(st.overlayText||'')}" data-act="ccTextChange" autocomplete="off" style="padding:.4rem .6rem;background:#101319;border-color:rgba(255,255,255,.2);color:#fff">

      <div class="cc-subpanel-title" style="margin-top:.3rem">Agricultural Templates:</div>
      <div class="cc-row-controls">
        ${FARM_SUBTITLES.map(tpl=>`<button type="button" class="cc-btn-pill" data-act="ccTextTemplate" data-t="${esc(tpl)}">${tpl}</button>`).join('')}
      </div>

      <div class="cc-subpanel-title" style="margin-top:.3rem">Font Typography</div>
      <div class="cc-row-controls">
        ${TEXT_FONTS.map(f=>`<button type="button" class="cc-btn-pill ${st.textFont===f.id?'active':''}" data-act="ccFontChange" data-v="${f.id}">${f.label}</button>`).join('')}
      </div>

      <div class="cc-subpanel-title" style="margin-top:.3rem">Badge Style & Position</div>
      <div class="cc-row-controls">
        ${BADGE_STYLES.map(b=>`<button type="button" class="cc-btn-pill ${st.overlayStyle===b.id?'active':''}" data-act="ccStyleChange" data-v="${b.id}">${b.label}</button>`).join('')}
        ${BADGE_POS.map(p=>`<button type="button" class="cc-btn-pill ${st.overlayPos===p.id?'active':''}" data-act="ccPosChange" data-v="${p.id}">${p.label}</button>`).join('')}
      </div>
    `;
  }

  if(tab==='filters'){
    return `
      <div class="cc-subpanel-title">🎨 Agro Studio Filter Presets</div>
      <div class="cc-row-controls">
        ${CAPCUT_FILTERS.map(f=>`<button type="button" class="cc-btn-pill ${st.filterId===f.id?'active':''}" data-act="ccFilterChange" data-v="${f.id}">${f.label}</button>`).join('')}
      </div>
      <div class="cc-slider-row" style="margin-top:.4rem">
        <span>Intensity:</span>
        <input type="range" min="0" max="100" value="${st.filterIntensity!==undefined?st.filterIntensity:100}" data-act="ccFilterIntensity">
        <span id="ccFilterIntensityLbl">${st.filterIntensity!==undefined?st.filterIntensity:100}%</span>
      </div>
    `;
  }

  if(tab==='adjust'){
    const adj=st.adjust||{};
    return `
      <div class="cc-subpanel-title" style="display:flex;justify-content:space-between">
        <span>⚙️ Pro Color Grading & HSL</span>
        <button type="button" class="btn ghost sm" data-act="ccAdjustReset" style="font-size:.7rem;padding:.1rem .5rem">↺ Reset</button>
      </div>
      <div class="cc-slider-row">
        <span>Brightness</span>
        <input type="range" min="-50" max="50" value="${adj.brightness||0}" data-act="ccAdjustChange" data-prop="brightness">
        <span id="adjVal_brightness">${adj.brightness||0}</span>
      </div>
      <div class="cc-slider-row">
        <span>Contrast</span>
        <input type="range" min="-50" max="50" value="${adj.contrast||0}" data-act="ccAdjustChange" data-prop="contrast">
        <span id="adjVal_contrast">${adj.contrast||0}</span>
      </div>
      <div class="cc-slider-row">
        <span>Saturation</span>
        <input type="range" min="-50" max="50" value="${adj.saturation||0}" data-act="ccAdjustChange" data-prop="saturation">
        <span id="adjVal_saturation">${adj.saturation||0}</span>
      </div>
      <div class="cc-slider-row">
        <span>Warmth</span>
        <input type="range" min="-50" max="50" value="${adj.warmth||0}" data-act="ccAdjustChange" data-prop="warmth">
        <span id="adjVal_warmth">${adj.warmth||0}</span>
      </div>
      <div class="cc-slider-row">
        <span>Highlights</span>
        <input type="range" min="-50" max="50" value="${adj.highlights||0}" data-act="ccAdjustChange" data-prop="highlights">
        <span id="adjVal_highlights">${adj.highlights||0}</span>
      </div>
      <div class="cc-slider-row">
        <span>Shadows</span>
        <input type="range" min="-50" max="50" value="${adj.shadows||0}" data-act="ccAdjustChange" data-prop="shadows">
        <span id="adjVal_shadows">${adj.shadows||0}</span>
      </div>
    `;
  }

  if(tab==='effects'){
    return `
      <div class="cc-subpanel-title">✨ Dynamic VFX & Motion Effects</div>
      <div class="cc-row-controls">
        ${CAPCUT_EFFECTS.map(fx=>`<button type="button" class="cc-btn-pill ${st.effect===fx.id?'active':''}" data-act="ccEffectChange" data-v="${fx.id}">${fx.label}</button>`).join('')}
      </div>
      <p class="muted small" style="margin:.3rem 0 0;color:rgba(255,255,255,.55)">
        Agro Studio dynamic VFX bring professional motion graphics to your agriculture posts.
      </p>
    `;
  }

  if(tab==='transitions'){
    return `
      <div class="cc-subpanel-title">🔀 Clip Intro & Transitions</div>
      <div class="cc-row-controls">
        ${CAPCUT_TRANSITIONS.map(tr=>`<button type="button" class="cc-btn-pill ${st.transition===tr.id?'active':''}" data-act="ccTransitionChange" data-v="${tr.id}">${tr.label}</button>`).join('')}
      </div>
      <p class="muted small" style="margin:.3rem 0 0;color:rgba(255,255,255,.55)">
        Choose smooth cinematic intro and scene transitions for your media.
      </p>
    `;
  }

  if(tab==='stickers'){
    return `
      <div class="cc-subpanel-title">🏷️ Agricultural Stickers & Badges</div>
      <div class="cc-row-controls" style="font-size:1.35rem;padding-bottom:.2rem">
        ${CAPCUT_STICKERS.map(s=>`<button type="button" class="cc-btn-pill" data-act="ccAddSticker" data-emoji="${s.emoji}" title="${s.label}">${s.emoji}</button>`).join('')}
      </div>
      <div class="cc-subpanel-title" style="margin-top:.3rem">Sticker Placement:</div>
      <div class="cc-row-controls">
        <button type="button" class="cc-btn-pill ${st.stickerPos==='top-right'?'active':''}" data-act="ccStickerPos" data-v="top-right">Top Right</button>
        <button type="button" class="cc-btn-pill ${st.stickerPos==='top-left'?'active':''}" data-act="ccStickerPos" data-v="top-left">Top Left</button>
        <button type="button" class="cc-btn-pill ${st.stickerPos==='center'?'active':''}" data-act="ccStickerPos" data-v="center">Center</button>
        <button type="button" class="cc-btn-pill ${st.stickerPos==='bottom-right'?'active':''}" data-act="ccStickerPos" data-v="bottom-right">Bottom Right</button>
        <button type="button" class="cc-btn-pill ${st.stickerPos==='bottom-left'?'active':''}" data-act="ccStickerPos" data-v="bottom-left">Bottom Left</button>
        ${st.stickers&&st.stickers.length?`<button type="button" class="cc-btn-pill" data-act="ccRemoveSticker" style="color:#ef4444;border-color:#ef4444">🗑️ Remove Last</button>`:''}
      </div>
    `;
  }

  if(tab==='audio'){
    return `
      <div class="cc-subpanel-title">🔊 Volume Boost & Master Audio</div>
      <div class="cc-slider-row">
        <span>Volume:</span>
        <input type="range" min="0" max="200" value="${st.volume!==undefined?st.volume:100}" data-act="ccVolumeChange">
        <span id="ccVolumeLbl">${st.volume!==undefined?st.volume:100}%</span>
      </div>

      <div class="cc-row-controls" style="margin-top:.3rem">
        <button type="button" class="cc-btn-pill ${st.muted?'active':''}" data-act="ccAudioToggle">
          ${st.muted?'🔇 Muted' : '🔊 Original Sound ON'}
        </button>
      </div>

      <div class="cc-subpanel-title" style="margin-top:.4rem">🎧 Farm Sound Effects (SFX Synthesizer)</div>
      <div class="cc-row-controls">
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="rooster">🐓 Rooster</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="cow">🐮 Cow</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="tractor">🚜 Tractor</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="bell">🔔 Bell</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="whoosh">💨 Whoosh</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="boom">💥 Boom</button>
        <button type="button" class="cc-sfx-btn" data-act="ccPlaySFX" data-sfx="click">📸 Shutter</button>
      </div>

      <div class="cc-subpanel-title" style="margin-top:.4rem">🎵 Farm Ambient Soundtracks</div>
      <div class="cc-row-controls">
        <button type="button" class="cc-btn-pill ${st.audioTrack==='none'?'active':''}" data-act="ccAudioTrack" data-v="none">None</button>
        <button type="button" class="cc-btn-pill ${st.audioTrack==='birds'?'active':''}" data-act="ccAudioTrack" data-v="birds">🐦 Farm Birds</button>
        <button type="button" class="cc-btn-pill ${st.audioTrack==='rain'?'active':''}" data-act="ccAudioTrack" data-v="rain">🌧️ Rain</button>
        <button type="button" class="cc-btn-pill ${st.audioTrack==='beat'?'active':''}" data-act="ccAudioTrack" data-v="beat">🎵 Afro Beat</button>
        <button type="button" class="cc-btn-pill ${st.audioTrack==='guitar'?'active':''}" data-act="ccAudioTrack" data-v="guitar">🎸 Acoustic</button>
      </div>
    `;
  }

  return '';
}

function updateCapCutPreview(){
  if(!CAPCUT_STATE)return;
  const filterCss=computeCapCutFilter(CAPCUT_STATE);
  const transformCss=computeCapCutTransform(CAPCUT_STATE);
  const effectClass=CAPCUT_STATE.effect&&CAPCUT_STATE.effect!=='none'?`fx-${CAPCUT_STATE.effect}`:'';

  const box=$('#ccCanvasBox');
  if(box){
    box.className=`cc-canvas-box ratio-${CAPCUT_STATE.aspectRatio||'9-16'}`;
  }

  const mediaEl=$('#ccPreviewMedia');
  if(mediaEl){
    mediaEl.style.filter=filterCss;
    mediaEl.style.transform=transformCss;
    mediaEl.className=`cc-media ${effectClass}`;
  }

  const ov=$('#ccOverlayText');
  if(ov){
    ov.textContent=CAPCUT_STATE.overlayText||'';
    ov.className=`tiktok-text-badge ${CAPCUT_STATE.overlayPos||'top'} ${CAPCUT_STATE.overlayStyle||'badge-dark'} ${CAPCUT_STATE.textFont||'font-system'}`;
    ov.style.display=CAPCUT_STATE.overlayText?'block':'none';
  }

  const stickBox=$('#ccStickersBox');
  if(stickBox){
    stickBox.innerHTML=renderStickersHtml(CAPCUT_STATE.stickers);
  }

  const safeGuide=$('#ccSafeAreaGuide');
  if(safeGuide){
    safeGuide.style.display=CAPCUT_STATE.safeArea?'flex':'none';
  }

  const undoBtn=$('#ccUndoBtn');
  if(undoBtn)undoBtn.style.opacity=CAPCUT_HISTORY_INDEX>0?'1':'0.4';
  const redoBtn=$('#ccRedoBtn');
  if(redoBtn)redoBtn.style.opacity=CAPCUT_HISTORY_INDEX<CAPCUT_HISTORY.length-1?'1':'0.4';
}

function openAgroStudio(file,mediaType,existing){
  const isVideo=mediaType==='video';
  const duration=existing&&existing.totalDur?existing.totalDur:(isVideo?60:15);
  const initStart=existing?existing.trimStart:0;
  const initEnd=existing?existing.trimEnd:Math.min(duration,600);

  CAPCUT_STATE={
    mediaType,
    file,
    src:existing&&existing.src?existing.src:URL.createObjectURL(file),
    duration,
    trimStart:initStart,
    trimEnd:initEnd,
    aspectRatio:existing?existing.aspectRatio:'9-16',
    resolution:existing?(existing.resolution||'1080p'):'1080p',
    scale:existing?(existing.scale||100):100,
    speed:existing?existing.speed:1.0,
    rotation:existing?existing.rotation:0,
    flipH:existing?!!existing.flipH:false,
    filterId:existing?existing.filterId:'none',
    filterIntensity:existing&&existing.filterIntensity!==undefined?existing.filterIntensity:100,
    adjust:existing&&existing.adjust?{...existing.adjust}:{brightness:0,contrast:0,saturation:0,warmth:0,highlights:0,shadows:0},
    effect:existing?existing.effect:'none',
    transition:existing?(existing.transition||'none'):'none',
    overlayText:existing?(existing.overlayText||''):'',
    overlayPos:existing?(existing.overlayPos||'top'):'top',
    overlayStyle:existing?(existing.overlayStyle||'badge-dark'):'badge-dark',
    textFont:existing?(existing.textFont||'font-system'):'font-system',
    textSize:'md',
    stickers:existing&&existing.stickers?[...existing.stickers]:[],
    stickerPos:'top-right',
    audioTrack:existing?(existing.audioTrack||'none'):'none',
    volume:existing?(existing.volume!==undefined?existing.volume:100):100,
    muted:existing?!!existing.muted:false,
    safeArea:false,
    activeTab:'edit',
    isPlaying:false
  };

  CAPCUT_HISTORY=[];
  CAPCUT_HISTORY_INDEX=-1;
  pushCapCutHistory();

  const filterCss=computeCapCutFilter(CAPCUT_STATE);
  const transformCss=computeCapCutTransform(CAPCUT_STATE);
  const effectClass=CAPCUT_STATE.effect&&CAPCUT_STATE.effect!=='none'?`fx-${CAPCUT_STATE.effect}`:'';

  const layer=$('#layer');
  if(!layer)return;
  layer.innerHTML=`
    <div class="agro-studio-fullscreen capcut-studio-fullscreen" role="dialog" aria-modal="true" aria-label="Agro Studio Pro">
      <!-- PRO TOP BAR -->
      <div class="cc-topbar">
        <div class="cc-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#00f2fe"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
          <span class="cc-brand-pro">Agro Studio Pro</span>
          <span class="cc-badge-gold">AGRO PRO v4.2</span>
          <span class="cc-badge">${isVideo?'VIDEO NLE':'PHOTO STUDIO'}</span>
        </div>

        <div class="row" style="gap:.45rem;align-items:center">
          <select class="cc-res-select" id="ccResSelect" data-act="ccResChange" title="Resolution">
            <option value="1080p" ${CAPCUT_STATE.resolution==='1080p'?'selected':''}>1080P FHD (30fps)</option>
            <option value="720p" ${CAPCUT_STATE.resolution==='720p'?'selected':''}>720P HD (Fast)</option>
            <option value="4k" ${CAPCUT_STATE.resolution==='4k'?'selected':''}>4K UHD (Ultra)</option>
          </select>
          <button type="button" class="cc-tl-btn" id="ccUndoBtn" data-act="ccUndo" title="Undo">↩️</button>
          <button type="button" class="cc-tl-btn" id="ccRedoBtn" data-act="ccRedo" title="Redo">↪️</button>
          <button type="button" class="cc-tl-btn ${CAPCUT_STATE.safeArea?'active':''}" data-act="ccToggleSafeArea" title="Safe Area Guides">📐 Guides</button>
          <button type="button" class="btn ghost sm" data-act="ccCancel" style="color:rgba(255,255,255,.75)">Cancel</button>
          <button type="button" class="cc-export-btn" data-act="ccExport">
            ${ic('check')} Export
          </button>
        </div>
      </div>

      <!-- CANVAS STAGE -->
      <div class="cc-stage">
        <!-- Timecode HUD -->
        <div class="cc-timecode-hud" id="ccTimecodeHud">
          ⏱️ <span id="ccHudTime">00:00:00</span> / ${fmtTimecode(CAPCUT_STATE.duration)}
        </div>

        <div class="cc-canvas-box ratio-${CAPCUT_STATE.aspectRatio}" id="ccCanvasBox">
          ${isVideo?`
            <video id="ccPreviewMedia" class="cc-media ${effectClass}" src="${CAPCUT_STATE.src}" playsinline loop muted style="filter:${filterCss};transform:${transformCss}"></video>
            <div class="cc-play-overlay" id="ccPlayOverlay" data-act="ccTogglePlay">
              <span><svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg></span>
            </div>
          `:`
            <img id="ccPreviewMedia" class="cc-media ${effectClass}" src="${CAPCUT_STATE.src}" style="filter:${filterCss};transform:${transformCss}" alt="Agro Studio Preview">
          `}

          <!-- Safe Area Guides Overlay -->
          <div class="cc-safe-area" id="ccSafeAreaGuide" style="display:none">
            <span>TikTok / Reels Safe Zone (Top)</span>
            <span>Caption & Action Zone (Bottom)</span>
          </div>

          <!-- Overlay Text Badge -->
          <div id="ccOverlayText" class="tiktok-text-badge ${CAPCUT_STATE.overlayPos} ${CAPCUT_STATE.overlayStyle} ${CAPCUT_STATE.textFont}" style="${CAPCUT_STATE.overlayText?'':'display:none'}">
            ${esc(CAPCUT_STATE.overlayText)}
          </div>

          <!-- Stickers Box -->
          <div id="ccStickersBox">
            ${renderStickersHtml(CAPCUT_STATE.stickers)}
          </div>
        </div>
      </div>

      ${isVideo?`
      <!-- TIMELINE & PLAYHEAD PRO -->
      <div class="cc-timeline-area">
        <div class="cc-tl-toolbar">
          <div class="cc-tl-tools">
            <button type="button" class="cc-tl-btn" data-act="ccSplitClip" title="Split clip at playhead">✂️ Split</button>
            <button type="button" class="cc-tl-btn" data-act="ccResetTrim" title="Reset clip to full duration">↺ Reset</button>
            <span class="muted small" style="color:rgba(255,255,255,.5);margin-left:.3rem">
              Max 10 mins
            </span>
          </div>
          <div class="cc-time-ruler">
            <span id="ccCurrentTimeLbl">0:00</span>
            <span id="ccTrimDurationLbl" style="color:#00f2fe;font-weight:700">${fmtSec(CAPCUT_STATE.trimStart)} - ${fmtSec(CAPCUT_STATE.trimEnd)} (${fmtSec(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart)})</span>
            <span>${fmtSec(CAPCUT_STATE.duration)}</span>
          </div>
        </div>

        <div class="cc-track-wrapper">
          <div class="cc-track-strip" id="ccTrackStrip" data-act="ccScrubTrack">
            <div class="cc-strip-fill"></div>
            <div class="cc-playhead-line" id="ccPlayhead" style="left:0%"></div>
          </div>

          <!-- Visual Multi-Tracks Stack -->
          <div class="cc-mini-tracks">
            <span class="cc-mini-track track-video">🎬 Video 1 (${fmtSec(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart)})</span>
            ${CAPCUT_STATE.overlayText?`<span class="cc-mini-track track-text" id="ccMiniTextChip">✍️ ${esc(CAPCUT_STATE.overlayText.slice(0,18))}</span>`:''}
            ${CAPCUT_STATE.stickers.length?`<span class="cc-mini-track track-sticker" id="ccMiniStickerChip">🏷️ ${CAPCUT_STATE.stickers.length} Stickers</span>`:''}
            ${CAPCUT_STATE.effect!=='none'?`<span class="cc-mini-track track-vfx">✨ VFX: ${CAPCUT_STATE.effect}</span>`:''}
            <span class="cc-mini-track track-audio">🎵 ${CAPCUT_STATE.audioTrack!=='none'?CAPCUT_STATE.audioTrack:'Audio: '+CAPCUT_STATE.volume+'%'}</span>
          </div>

          <div class="cc-trim-slider-wrap">
            <div>
              <span class="muted small" style="color:rgba(255,255,255,.6)">Start: </span><span id="ccStartLbl" style="font-weight:700;color:#facc15">${fmtSec(CAPCUT_STATE.trimStart)}</span>
              <input type="range" id="ccStartSlider" min="0" max="${CAPCUT_STATE.duration}" step="0.5" value="${CAPCUT_STATE.trimStart}" data-act="ccStartChange">
            </div>
            <div>
              <span class="muted small" style="color:rgba(255,255,255,.6)">End: </span><span id="ccEndLbl" style="font-weight:700;color:#facc15">${fmtSec(CAPCUT_STATE.trimEnd)}</span>
              <input type="range" id="ccEndSlider" min="0" max="${CAPCUT_STATE.duration}" step="0.5" value="${CAPCUT_STATE.trimEnd}" data-act="ccEndChange">
            </div>
          </div>
        </div>
      </div>
      `:''}

      <!-- TOOL SUBPANEL -->
      <div class="cc-subpanel" id="ccSubpanel">
        ${renderCapCutSubpanel(CAPCUT_STATE)}
      </div>

      <!-- BOTTOM TOOLBAR RIBBON PRO -->
      <div class="cc-tools-ribbon">
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='edit'?'active':''}" data-act="ccTab" data-tab="edit">
          <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          <span>Edit / Crop</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='text'?'active':''}" data-act="ccTab" data-tab="text">
          <svg viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg>
          <span>Text & Subs</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='filters'?'active':''}" data-act="ccTab" data-tab="filters">
          <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
          <span>Filters Pro</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='adjust'?'active':''}" data-act="ccTab" data-tab="adjust">
          <svg viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
          <span>Color HSL</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='effects'?'active':''}" data-act="ccTab" data-tab="effects">
          <svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
          <span>VFX Effects</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='transitions'?'active':''}" data-act="ccTab" data-tab="transitions">
          <svg viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/></svg>
          <span>Transitions</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='stickers'?'active':''}" data-act="ccTab" data-tab="stickers">
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
          <span>Stickers</span>
        </button>
        <button type="button" class="cc-tool-tab ${CAPCUT_STATE.activeTab==='audio'?'active':''}" data-act="ccTab" data-tab="audio">
          <svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
          <span>Audio & SFX</span>
        </button>
      </div>
    </div>
  `;

  if(isVideo){
    setTimeout(()=>{
      const v=$('#ccPreviewMedia');
      if(v){
        v.currentTime=CAPCUT_STATE.trimStart;
        v.playbackRate=CAPCUT_STATE.speed||1.0;
        v.ontimeupdate=()=>{
          if(!CAPCUT_STATE)return;
          const st=CAPCUT_STATE;
          if(st.trimEnd&&st.trimEnd>st.trimStart&&v.currentTime>=st.trimEnd){
            v.currentTime=st.trimStart;
          }
          const ph=$('#ccPlayhead');
          const timeLbl=$('#ccCurrentTimeLbl');
          const hudTime=$('#ccHudTime');
          const dur=Math.max(0.1,st.trimEnd-st.trimStart);
          const curr=Math.max(0,v.currentTime-st.trimStart);
          if(ph)ph.style.left=Math.min(100,(curr/dur)*100)+'%';
          if(timeLbl)timeLbl.textContent=fmtSec(v.currentTime);
          if(hudTime)hudTime.textContent=fmtTimecode(v.currentTime);
        };
        v.play().then(()=>{
          if(CAPCUT_STATE)CAPCUT_STATE.isPlaying=true;
          const po=$('#ccPlayOverlay');
          if(po)po.classList.add('playing');
        }).catch(()=>{});
      }
    },100);
  }
}

ACT.ccTab=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.activeTab=el.dataset.tab;
  document.querySelectorAll('.cc-tool-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===CAPCUT_STATE.activeTab));
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
};

ACT.ccRatio=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.aspectRatio=el.dataset.r;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccRatio"]').forEach(b=>b.classList.toggle('active',b.dataset.r===CAPCUT_STATE.aspectRatio));
};

ACT.ccScaleChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.scale=parseInt(el.value,10);
  const lbl=$('#ccScaleLbl');
  if(lbl)lbl.textContent=`${CAPCUT_STATE.scale}%`;
  updateCapCutPreview();
};

ACT.ccSpeed=el=>{
  if(!CAPCUT_STATE)return;
  const sp=parseFloat(el.dataset.v);
  CAPCUT_STATE.speed=sp;
  pushCapCutHistory();
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.playbackRate=sp;
  document.querySelectorAll('[data-act="ccSpeed"]').forEach(b=>b.classList.toggle('active',parseFloat(b.dataset.v)===sp));
};

ACT.ccRotate=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.rotation=((CAPCUT_STATE.rotation||0)+90)%360;
  pushCapCutHistory();
  updateCapCutPreview();
};

ACT.ccFlip=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.flipH=!CAPCUT_STATE.flipH;
  pushCapCutHistory();
  updateCapCutPreview();
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
};

ACT.ccToggleSafeArea=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.safeArea=!CAPCUT_STATE.safeArea;
  const btn=document.querySelector('[data-act="ccToggleSafeArea"]');
  if(btn)btn.classList.toggle('active',CAPCUT_STATE.safeArea);
  updateCapCutPreview();
};

ACT.ccResChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.resolution=el.value;
  pushCapCutHistory();
  toast(`Resolution: ${el.value.toUpperCase()}`);
};

ACT.ccUndo=()=>{
  if(CAPCUT_HISTORY_INDEX>0){
    CAPCUT_HISTORY_INDEX--;
    const snap=JSON.parse(CAPCUT_HISTORY[CAPCUT_HISTORY_INDEX]);
    Object.assign(CAPCUT_STATE,snap);
    updateCapCutPreview();
    const sub=$('#ccSubpanel');
    if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
    playCapCutSFX('click');
  }
};

ACT.ccRedo=()=>{
  if(CAPCUT_HISTORY_INDEX<CAPCUT_HISTORY.length-1){
    CAPCUT_HISTORY_INDEX++;
    const snap=JSON.parse(CAPCUT_HISTORY[CAPCUT_HISTORY_INDEX]);
    Object.assign(CAPCUT_STATE,snap);
    updateCapCutPreview();
    const sub=$('#ccSubpanel');
    if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
    playCapCutSFX('click');
  }
};

ACT.ccSplitClip=()=>{
  const v=$('#ccPreviewMedia');
  if(!v||v.tagName!=='VIDEO'||!CAPCUT_STATE)return;
  const curr=v.currentTime;
  if(curr<=CAPCUT_STATE.trimStart+1||curr>=CAPCUT_STATE.trimEnd-1){
    return toast('Move playhead inside clip to split.');
  }
  CAPCUT_STATE.trimEnd=parseFloat(curr.toFixed(1));
  const endSlider=$('#ccEndSlider');
  if(endSlider)endSlider.value=CAPCUT_STATE.trimEnd;
  const endLbl=$('#ccEndLbl');
  if(endLbl)endLbl.textContent=fmtSec(CAPCUT_STATE.trimEnd);
  const durLbl=$('#ccTrimDurationLbl');
  if(durLbl)durLbl.textContent=`${fmtSec(CAPCUT_STATE.trimStart)} - ${fmtSec(CAPCUT_STATE.trimEnd)} (${fmtSec(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart)})`;
  pushCapCutHistory();
  playCapCutSFX('whoosh');
  toast('Clip split at playhead position!');
};

ACT.ccResetTrim=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.trimStart=0;
  CAPCUT_STATE.trimEnd=Math.min(CAPCUT_STATE.duration,600);
  const startSlider=$('#ccStartSlider');
  if(startSlider)startSlider.value=0;
  const endSlider=$('#ccEndSlider');
  if(endSlider)endSlider.value=CAPCUT_STATE.trimEnd;
  const startLbl=$('#ccStartLbl');
  if(startLbl)startLbl.textContent=fmtSec(0);
  const endLbl=$('#ccEndLbl');
  if(endLbl)endLbl.textContent=fmtSec(CAPCUT_STATE.trimEnd);
  const durLbl=$('#ccTrimDurationLbl');
  if(durLbl)durLbl.textContent=`0:00 - ${fmtSec(CAPCUT_STATE.trimEnd)} (${fmtSec(CAPCUT_STATE.trimEnd)})`;
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.currentTime=0;
  pushCapCutHistory();
  playCapCutSFX('bell');
  toast('Trim reset to full.');
};

ACT.ccScrubTrack=el=>{
  const v=$('#ccPreviewMedia');
  if(!v||v.tagName!=='VIDEO'||!CAPCUT_STATE)return;
  const rect=el.getBoundingClientRect();
  const ev=window.event;
  if(!ev)return;
  const clickX=ev.clientX-rect.left;
  const pct=Math.max(0,Math.min(1,clickX/rect.width));
  const dur=Math.max(0.1,CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart);
  const targetTime=CAPCUT_STATE.trimStart+(pct*dur);
  v.currentTime=targetTime;
  const ph=$('#ccPlayhead');
  if(ph)ph.style.left=(pct*100)+'%';
  const timeLbl=$('#ccCurrentTimeLbl');
  if(timeLbl)timeLbl.textContent=fmtSec(targetTime);
  const hudTime=$('#ccHudTime');
  if(hudTime)hudTime.textContent=fmtTimecode(targetTime);
};

ACT.ccTogglePlay=()=>{
  const v=$('#ccPreviewMedia');
  if(!v||v.tagName!=='VIDEO')return;
  const po=$('#ccPlayOverlay');
  if(v.paused){
    v.play().catch(()=>{});
    if(CAPCUT_STATE)CAPCUT_STATE.isPlaying=true;
    if(po)po.classList.add('playing');
  }else{
    v.pause();
    if(CAPCUT_STATE)CAPCUT_STATE.isPlaying=false;
    if(po)po.classList.remove('playing');
  }
};

ACT.ccStartChange=el=>{
  if(!CAPCUT_STATE)return;
  let val=parseFloat(el.value);
  if(val>=CAPCUT_STATE.trimEnd-0.5){
    val=Math.max(0,CAPCUT_STATE.trimEnd-0.5);
    el.value=val;
  }
  if(CAPCUT_STATE.trimEnd-val>600){
    CAPCUT_STATE.trimEnd=val+600;
    const endSlider=$('#ccEndSlider');
    if(endSlider)endSlider.value=CAPCUT_STATE.trimEnd;
    const endLbl=$('#ccEndLbl');
    if(endLbl)endLbl.textContent=fmtSec(CAPCUT_STATE.trimEnd);
  }
  CAPCUT_STATE.trimStart=val;
  const startLbl=$('#ccStartLbl');
  if(startLbl)startLbl.textContent=fmtSec(val);
  const durLbl=$('#ccTrimDurationLbl');
  if(durLbl)durLbl.textContent=`${fmtSec(CAPCUT_STATE.trimStart)} - ${fmtSec(CAPCUT_STATE.trimEnd)} (${fmtSec(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart)})`;
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.currentTime=val;
  pushCapCutHistory();
};

ACT.ccEndChange=el=>{
  if(!CAPCUT_STATE)return;
  let val=parseFloat(el.value);
  if(val<=CAPCUT_STATE.trimStart+0.5){
    val=Math.min(CAPCUT_STATE.duration,CAPCUT_STATE.trimStart+0.5);
    el.value=val;
  }
  if(val-CAPCUT_STATE.trimStart>600){
    val=CAPCUT_STATE.trimStart+600;
    el.value=val;
    toast('Video limit is 10 minutes.');
  }
  CAPCUT_STATE.trimEnd=val;
  const endLbl=$('#ccEndLbl');
  if(endLbl)endLbl.textContent=fmtSec(val);
  const durLbl=$('#ccTrimDurationLbl');
  if(durLbl)durLbl.textContent=`${fmtSec(CAPCUT_STATE.trimStart)} - ${fmtSec(CAPCUT_STATE.trimEnd)} (${fmtSec(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart)})`;
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.currentTime=Math.max(CAPCUT_STATE.trimStart,val-1);
  pushCapCutHistory();
};

ACT.ccTextChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.overlayText=el.value.trim();
  pushCapCutHistory();
  updateCapCutPreview();
};

ACT.ccTextTemplate=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.overlayText=el.dataset.t;
  const input=$('#ccTextInput');
  if(input)input.value=CAPCUT_STATE.overlayText;
  pushCapCutHistory();
  updateCapCutPreview();
  playCapCutSFX('bell');
};

ACT.ccFontChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.textFont=el.dataset.v;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccFontChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.textFont));
};

ACT.ccPosChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.overlayPos=el.dataset.v;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccPosChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.overlayPos));
};

ACT.ccStyleChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.overlayStyle=el.dataset.v;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccStyleChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.overlayStyle));
};

ACT.ccFilterChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.filterId=el.dataset.v;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccFilterChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.filterId));
};

ACT.ccFilterIntensity=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.filterIntensity=parseInt(el.value,10);
  const lbl=$('#ccFilterIntensityLbl');
  if(lbl)lbl.textContent=`${CAPCUT_STATE.filterIntensity}%`;
  updateCapCutPreview();
};

ACT.ccAdjustChange=el=>{
  if(!CAPCUT_STATE)return;
  const prop=el.dataset.prop;
  const val=parseInt(el.value,10);
  CAPCUT_STATE.adjust=CAPCUT_STATE.adjust||{};
  CAPCUT_STATE.adjust[prop]=val;
  const lbl=$('#adjVal_'+prop);
  if(lbl)lbl.textContent=val;
  updateCapCutPreview();
};

ACT.ccAdjustReset=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.adjust={brightness:0,contrast:0,saturation:0,warmth:0,highlights:0,shadows:0};
  pushCapCutHistory();
  updateCapCutPreview();
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
  playCapCutSFX('click');
};

ACT.ccEffectChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.effect=el.dataset.v;
  pushCapCutHistory();
  updateCapCutPreview();
  document.querySelectorAll('[data-act="ccEffectChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.effect));
  playCapCutSFX('whoosh');
};

ACT.ccTransitionChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.transition=el.dataset.v;
  pushCapCutHistory();
  document.querySelectorAll('[data-act="ccTransitionChange"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.transition));
  playCapCutSFX('whoosh');
  toast('Transition applied!');
};

ACT.ccAddSticker=el=>{
  if(!CAPCUT_STATE)return;
  const emoji=el.dataset.emoji;
  CAPCUT_STATE.stickers=CAPCUT_STATE.stickers||[];
  CAPCUT_STATE.stickers.push({emoji,pos:CAPCUT_STATE.stickerPos||'top-right'});
  pushCapCutHistory();
  updateCapCutPreview();
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
  playCapCutSFX('pop');
};

ACT.ccRemoveSticker=()=>{
  if(!CAPCUT_STATE||!CAPCUT_STATE.stickers)return;
  CAPCUT_STATE.stickers.pop();
  pushCapCutHistory();
  updateCapCutPreview();
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
};

ACT.ccStickerPos=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.stickerPos=el.dataset.v;
  document.querySelectorAll('[data-act="ccStickerPos"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.stickerPos));
};

ACT.ccVolumeChange=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.volume=parseInt(el.value,10);
  const lbl=$('#ccVolumeLbl');
  if(lbl)lbl.textContent=`${CAPCUT_STATE.volume}%`;
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO'&&!CAPCUT_STATE.muted){
    v.volume=Math.min(1.0,(CAPCUT_STATE.volume/100));
  }
};

ACT.ccAudioToggle=()=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.muted=!CAPCUT_STATE.muted;
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.muted=CAPCUT_STATE.muted;
  pushCapCutHistory();
  const sub=$('#ccSubpanel');
  if(sub)sub.innerHTML=renderCapCutSubpanel(CAPCUT_STATE);
};

ACT.ccAudioTrack=el=>{
  if(!CAPCUT_STATE)return;
  CAPCUT_STATE.audioTrack=el.dataset.v;
  pushCapCutHistory();
  document.querySelectorAll('[data-act="ccAudioTrack"]').forEach(b=>b.classList.toggle('active',b.dataset.v===CAPCUT_STATE.audioTrack));
  playCapCutSFX('bell');
};

ACT.ccPlaySFX=el=>{
  const sfx=el.dataset.sfx;
  playCapCutSFX(sfx);
};

ACT.ccCancel=()=>{
  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.pause();
  CAPCUT_STATE=null;
  closeSheet();
  ACT.newPost();
};

ACT.ccExport=()=>{
  if(!CAPCUT_STATE)return;
  const isVideo=CAPCUT_STATE.mediaType==='video';
  const cutDur=isVideo?(CAPCUT_STATE.trimEnd-CAPCUT_STATE.trimStart):0;
  if(isVideo&&cutDur>600){
    return alert('Trimmed video duration cannot exceed 10 minutes.');
  }

  const v=$('#ccPreviewMedia');
  if(v&&v.tagName==='VIDEO')v.pause();

  NP={
    kind:CAPCUT_STATE.mediaType,
    file:CAPCUT_STATE.file,
    src:CAPCUT_STATE.src,
    duration:cutDur,
    totalDur:CAPCUT_STATE.duration,
    trimStart:CAPCUT_STATE.trimStart,
    trimEnd:CAPCUT_STATE.trimEnd,
    aspectRatio:CAPCUT_STATE.aspectRatio||'9-16',
    resolution:CAPCUT_STATE.resolution||'1080p',
    scale:CAPCUT_STATE.scale||100,
    speed:CAPCUT_STATE.speed||1.0,
    rotation:CAPCUT_STATE.rotation||0,
    flipH:!!CAPCUT_STATE.flipH,
    filterId:CAPCUT_STATE.filterId,
    filterIntensity:CAPCUT_STATE.filterIntensity,
    filterCss:computeCapCutFilter(CAPCUT_STATE),
    transformCss:computeCapCutTransform(CAPCUT_STATE),
    adjust:{...CAPCUT_STATE.adjust},
    effect:CAPCUT_STATE.effect,
    transition:CAPCUT_STATE.transition||'none',
    overlayText:CAPCUT_STATE.overlayText,
    overlayPos:CAPCUT_STATE.overlayPos,
    overlayStyle:CAPCUT_STATE.overlayStyle,
    textFont:CAPCUT_STATE.textFont,
    stickers:[...CAPCUT_STATE.stickers],
    audioTrack:CAPCUT_STATE.audioTrack,
    volume:CAPCUT_STATE.volume||100,
    muted:!!CAPCUT_STATE.muted
  };

  playCapCutSFX('bell');
  CAPCUT_STATE=null;
  const layer=$('#layer');
  if(layer)layer.innerHTML='';

  // Open Agro Review Screen before publishing
  openAgroReviewScreen(NP);
  toast('Project exported! Review your creation before posting.');
};

function openAgroReviewScreen(data){
  if(!data)return;
  const isVideo=data.kind==='video';
  const filterObj=AGRO_FILTERS.find(f=>f.id===data.filterId)||AGRO_FILTERS[0];
  const effectClass=data.effect&&data.effect!=='none'?`fx-${data.effect}`:'';

  sheet('Review Creation - Agro Studio Pro',`
    <div class="agro-review-modal">
      <div class="agro-review-stage ratio-${data.aspectRatio||'9-16'}" style="position:relative">
        ${isVideo?`
          <video id="agroReviewVideo" class="cc-media ${effectClass}" src="${data.src}" playsinline loop muted style="filter:${data.filterCss||''};transform:${data.transformCss||''}"></video>
          <div class="cc-play-overlay" id="agroReviewPlayOverlay" data-act="agroReviewTogglePlay">
            <span><svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg></span>
          </div>
        `:`
          <img id="agroReviewImg" class="cc-media ${effectClass}" src="${data.src}" style="filter:${data.filterCss||''};transform:${data.transformCss||''}" alt="Agro Review Preview">
        `}

        ${data.overlayText?`
          <div class="tiktok-text-badge ${data.overlayPos||'top'} ${data.overlayStyle||'badge-dark'} ${data.textFont||'font-system'}">
            ${esc(data.overlayText)}
          </div>
        `:''}

        <div id="agroReviewStickersBox">
          ${renderStickersHtml(data.stickers||[])}
        </div>
      </div>

      <div class="agro-review-meta">
        <span class="pill" style="background:#00f2fe;color:#080d0a;font-weight:700">
          ${isVideo?`🎬 Video: ${fmtSec(data.trimStart||0)} - ${fmtSec(data.trimEnd||data.duration)} (${fmtSec(data.duration||0)})`:'📷 Photo Studio'}
        </span>
        <span class="pill" style="background:#22c55e;color:#080d0a;font-weight:700">📐 ${data.aspectRatio||'9:16'}</span>
        <span class="pill" style="background:#facc15;color:#080d0a;font-weight:700">📺 ${(data.resolution||'1080p').toUpperCase()}</span>
        <span class="pill">🎨 Filter: ${esc(filterObj.label)}</span>
        ${data.effect&&data.effect!=='none'?`<span class="pill">✨ VFX: ${esc(data.effect)}</span>`:''}
        ${data.stickers&&data.stickers.length?`<span class="pill">🏷️ ${data.stickers.length} Stickers</span>`:''}
        ${isVideo?`<span class="pill">🎵 ${data.audioTrack!=='none'?esc(data.audioTrack):'Original Audio: '+(data.muted?'Muted':data.volume+'%')}</span>`:''}
      </div>

      <div class="agro-review-actions">
        <button type="button" class="btn ghost" data-act="agroBackToEdit">
          ✏️ Edit Again
        </button>
        <button type="button" class="btn btn-post" data-act="agroProceedToPost">
          🚀 Proceed to Post
        </button>
      </div>
    </div>
  `);

  if(isVideo){
    setTimeout(()=>{
      const v=$('#agroReviewVideo');
      if(v){
        v.currentTime=data.trimStart||0;
        v.playbackRate=data.speed||1.0;
        v.muted=false;
        v.volume=data.muted?0:Math.min(1.0,(data.volume||100)/100);
        v.ontimeupdate=()=>{
          if(data.trimEnd&&v.currentTime>=data.trimEnd){
            v.currentTime=data.trimStart||0;
          }
        };
        v.play().then(()=>{
          const po=$('#agroReviewPlayOverlay');
          if(po)po.classList.add('playing');
        }).catch(()=>{
          v.muted=true;
          v.play().catch(()=>{});
        });
      }
    },120);
  }
}

ACT.agroReviewTogglePlay=()=>{
  const v=$('#agroReviewVideo');
  if(!v)return;
  const po=$('#agroReviewPlayOverlay');
  if(v.paused){
    v.play().catch(()=>{});
    if(po)po.classList.add('playing');
  }else{
    v.pause();
    if(po)po.classList.remove('playing');
  }
};

ACT.agroBackToEdit=()=>{
  const v=$('#agroReviewVideo');
  if(v)v.pause();
  closeSheet();
  if(NP&&NP.file){
    openAgroStudio(NP.file,NP.kind,NP);
  }
};

ACT.agroProceedToPost=()=>{
  const v=$('#agroReviewVideo');
  if(v)v.pause();
  closeSheet();
  ACT.newPost();
  toast(curLang()==='sw'?'Tayari kuchapisha! Ongeza ujumbe na reli.':'Ready to publish! Add your caption and hashtags.');
};

ACT.reEditMedia=()=>{
  if(!NP||!NP.file)return;
  openAgroStudio(NP.file,NP.kind,NP);
};

ACT.newPost=()=>{
  if(needLogin('Please log in to publish posts.'))return;
  if(!NP)NP={kind:'text'};
  const isSw=curLang()==='sw';
  const hasVideo=NP&&NP.kind==='video';
  const hasImg=NP&&NP.kind==='image';

  let mediaInfo='';
  if(hasVideo){
    const fObj=AGRO_FILTERS.find(f=>f.id===NP.filterId)||AGRO_FILTERS[0];
    const durLabel=`${fmtSec(NP.trimStart||0)} - ${fmtSec(NP.trimEnd||NP.duration)} (${fmtSec(NP.duration)})`;
    mediaInfo=`<div class="row wrap" style="align-items:center;gap:.4rem;margin-top:.4rem">
      <span class="pill" style="background:#00f2fe;color:#080d0a;font-weight:700">🎬 Agro Studio Pro Video: ${durLabel}</span>
      <span class="pill" style="background:#22c55e;color:#080d0a;font-weight:700">📐 ${NP.aspectRatio||'9:16'}</span>
      <span class="pill" style="background:#facc15;color:#080d0a;font-weight:700">📺 ${(NP.resolution||'1080p').toUpperCase()}</span>
      ${NP.overlayText?`<span class="pill">✍️ ${esc(NP.overlayText.slice(0,20))}</span>`:''}
      <span class="pill">🎨 ${esc(fObj.label)}</span>
      ${NP.stickers&&NP.stickers.length?`<span class="pill">🏷️ ${NP.stickers.length} Stickers</span>`:''}
      <button type="button" class="btn ghost sm" data-act="reEditMedia">✏️ ${isSw?'Hariri Tena na Agro Studio Pro':'Edit with Agro Studio Pro'}</button>
    </div>`;
  }else if(hasImg){
    const fObj=AGRO_FILTERS.find(f=>f.id===NP.filterId)||AGRO_FILTERS[0];
    mediaInfo=`<div class="row wrap" style="align-items:center;gap:.4rem;margin-top:.4rem">
      <span class="pill" style="background:#00f2fe;color:#080d0a;font-weight:700">📷 Agro Studio Pro Photo</span>
      <span class="pill" style="background:#22c55e;color:#080d0a;font-weight:700">📐 ${NP.aspectRatio||'9:16'}</span>
      ${NP.overlayText?`<span class="pill">✍️ ${esc(NP.overlayText.slice(0,20))}</span>`:''}
      <span class="pill">🎨 ${esc(fObj.label)}</span>
      ${NP.stickers&&NP.stickers.length?`<span class="pill">🏷️ ${NP.stickers.length} Stickers</span>`:''}
      <button type="button" class="btn ghost sm" data-act="reEditMedia">✏️ ${isSw?'Hariri Tena na Agro Studio Pro':'Edit with Agro Studio Pro'}</button>
    </div>`;
  }

  sheet(t('btn_new_post'),`<form class="form" data-form="post">
    <label class="lab">${isSw?'Ujumbe / Maelezo':'Message'}<textarea class="field" name="text" maxlength="300" placeholder="${isSw?'Andika ushauri au maelezo ya kilimo au mifugo':'Write an agricultural tip or question'}"></textarea></label>
    <div class="row wrap">
      <button type="button" class="btn ghost sm" data-act="npMedia" data-k="image">${ic('image')} ${isSw?'Picha (Agro Studio Pro)':'Photo (Agro Studio Pro)'}</button>
      <button type="button" class="btn ghost sm" data-act="npMedia" data-k="video">${ic('video')} ${isSw?'Video (Agro Studio Pro)':'Video (Agro Studio Pro)'}</button>
    </div>
    <div id="npName">${mediaInfo}</div>
    <label class="lab">${isSw?'Maelezo mafupi au reli (hashtags)':'Caption or hashtags'}<input class="field" name="cap" maxlength="120" placeholder="#kilimo #ufugaji #ushauri"></label>
    <label class="lab">${isSw?'Kitengo':'Category'}<select class="field" name="tag"><option value="kilimo">${isSw?'Kilimo (Farming)':'Farming (Kilimo)'}</option><option value="ufugaji">${isSw?'Ufugaji (Livestock)':'Livestock (Ufugaji)'}</option></select></label>
    <button class="btn">${isSw?'Chapisha':'Publish'}</button>
  </form>`);
};

ACT.npMedia=async el=>{
  const k=el.dataset.k;
  if(!ST().perm.file)return toast(t('perm_file_disabled'));
  const f=await pickFile(k==='image'?'image/*':'video/*');
  if(!f)return;
  try{
    if(k==='image'){
      openAgroStudio(f,'image',null);
    }else{
      if(f.size>150e6)return toast(curLang()==='sw'?'Video inazidi ukubwa wa 150MB.':'Video exceeds maximum size of 150MB.');
      const duration=await getVideoDuration(f);
      openAgroStudio(f,'video',{totalDur:duration,trimStart:0,trimEnd:Math.min(duration,600)});
    }
  }catch(e){
    toast(curLang()==='sw'?'Haikuweza kusoma faili la video/picha.':'Could not read file.');
  }
};

const openCapCutStudio=openAgroStudio;
window.openAgroStudio=openAgroStudio;
window.openCapCutStudio=openAgroStudio;

FORM.post=async f=>{
  const text=fv(f,'text').trim();
  const cap=fv(f,'cap').trim();
  const tag=fv(f,'tag')||'kilimo';
  if(!text&&!cap&&(!NP||NP.kind==='text')){
    return toast(curLang()==='sw'?'Tafadhali andika ujumbe au ambatanisha picha/video.':'Please enter text or attach media.');
  }

  const submitBtn=f.querySelector('button.btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent=curLang()==='sw'?'Inakagua maudhui...':'Checking content...';}

  // Content moderation check
  const mod=await checkPostContent(text,cap,tag);
  if(!mod.allowed){
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=curLang()==='sw'?'Chapisha':'Publish';}
    alert(mod.reason);
    return;
  }

  // Upload video or media to backend if available
  let finalSrc=NP?NP.src:null;
  if(NP&&NP.file&&NP.kind==='video'){
    if(submitBtn)submitBtn.textContent=curLang()==='sw'?'Inakata na kuhifadhi video...':'Processing & saving video...';
    try{
      const upUrl=`${API_BASE}/api/v1/media/upload?name=${encodeURIComponent(NP.file.name)}&start=${NP.trimStart||0}&end=${NP.trimEnd||0}`;
      const upRes=await fetch(upUrl,{
        method:'POST',
        headers:{'Content-Type':NP.file.type||'video/mp4'},
        body:NP.file
      });
      if(upRes.ok){
        const upData=await upRes.json();
        if(upData.url)finalSrc=upData.url;
      }
    }catch(e){
      // Keep local blob if backend upload is unavailable
    }
  }

  const u=curUser();
  DB.posts.unshift({
    id:uid('p'),
    by:u.id,
    name:u.name,
    handle:u.handle,
    color:colorOf(u.id),
    kind:NP?NP.kind:'text',
    src:finalSrc,
    text,
    caption:cap,
    tag,
    aspectRatio:NP?NP.aspectRatio:'9-16',
    filter:NP?NP.filterCss:'none',
    transform:NP?NP.transformCss:'',
    effect:NP?NP.effect:'none',
    overlayText:NP?NP.overlayText:'',
    overlayPos:NP?NP.overlayPos:'top',
    overlayStyle:NP?NP.overlayStyle:'badge-dark',
    stickers:NP?NP.stickers:[],
    trimStart:NP?NP.trimStart:0,
    trimEnd:NP?NP.trimEnd:0,
    speed:NP?NP.speed:1,
    audioTrack:NP?NP.audioTrack:'none',
    bg:Math.floor(Math.random()*BGS.length),
    ts:now(),
    likedBy:[],
    reposts:0,
    comments:[]
  });
  const v=NP&&NP.kind==='video';
  NP=null;
  save();
  closeSheet();
  S.stream={tab:'you',q:'',focus:null};
  render();
  toast(v
    ?(curLang()==='sw'?'Video imechapishwa kikamilifu na inacheza!':'Video published successfully!')
    :(curLang()==='sw'?'Chapisho limechapishwa kikamilifu!':'Published successfully.'));
};


/* ============ chat ============ */
const TYPING={};let REC=null,recT=null,CALL=null,COMM_SOCKET=null,COMM_RETRY=null,PENDING_CALL=null;
const contactOf=id=>{const u=curUser();return u&&u.contacts.find(c=>c.id===id)};
function rememberRemotePeer(peer){const u=curUser();if(!u||!peer)return null;let contact=contactOf(peer.id);if(!contact){contact={id:peer.id,name:peer.name,role:roleLabel(peer.role),roleCode:peer.role,remote:true,online:!!peer.online,fav:false,blocked:false};u.contacts.push(contact)}else Object.assign(contact,{name:peer.name,role:roleLabel(peer.role),roleCode:peer.role,remote:true,online:!!peer.online});u.chats[peer.id]=u.chats[peer.id]||{id:peer.id,type:'dm',name:peer.name,unread:0,msgs:[],remote:true};u.chats[peer.id].remote=true;u.chats[peer.id].name=peer.name;return u.chats[peer.id]}
function mapRemoteMessage(message,peerId){const u=curUser();return{id:String(message.id),from:message.sender_id===u.remoteId?'me':peerId,kind:'text',text:message.text,ts:message.created_at}}
async function syncRemoteThread(){const u=curUser(),chat=u&&u.chats[S.thread];if(!u||!chat||!chat.remote)return;try{const result=await communicationsRequest(`/threads/${encodeURIComponent(S.thread)}/messages`);chat.msgs=(result.messages||[]).map(message=>mapRemoteMessage(message,S.thread));save();if(S.view==='chat'&&S.thread===chat.id)paintThread()}catch(e){if(e.status===401)toast(t('verification_unavailable'))}}
async function loadRemoteThreads(){const u=curUser();if(!u||!u.remoteId)return;try{const result=await communicationsRequest('/threads');for(const thread of result.threads||[]){const chat=rememberRemotePeer(thread.peer);if(thread.last_message){chat.msgs=[mapRemoteMessage(thread.last_message,thread.peer.id)]}}save();if(S.view==='chat'&&!S.thread)render()}catch(e){}}
function expireCommunicationSession(){const user=curUser();if(!user)return;delete user.remoteId;DB.session=null;save();S.thread=null;S.auth='login';go('account',{auth:'login'});toast(t('communications_sign_in'))}
function connectCommunicationSocket(){const u=curUser();if(!u||!u.remoteId||COMM_SOCKET&&(COMM_SOCKET.readyState===WebSocket.OPEN||COMM_SOCKET.readyState===WebSocket.CONNECTING))return;clearTimeout(COMM_RETRY);const url=new URL(`${AUTH_API_BASE}/communications/ws`,location.href);url.protocol=url.protocol==='https:'?'wss:':'ws:';COMM_SOCKET=new WebSocket(url);COMM_SOCKET.onmessage=event=>{let payload;try{payload=JSON.parse(event.data)}catch(e){return}if(payload.type==='message')receiveRemoteMessage(payload);else if(payload.type==='signal')handleCallSignal(payload).catch(()=>toast(t('call_unavailable')));else if(payload.type==='error'){if(CALL&&payload.code==='peer_offline')finishCall(false);toast(payload.code==='peer_offline'?t('call_unavailable'):payload.detail||t('call_unavailable'))}};COMM_SOCKET.onclose=event=>{COMM_SOCKET=null;if(event.code===1008){expireCommunicationSession();return}if(curUser()&&curUser().remoteId)COMM_RETRY=setTimeout(connectCommunicationSocket,3000)}}
function receiveRemoteMessage(payload){const u=curUser(),peer=payload.peer,message=payload.message;if(!u||!peer||!message)return;const chat=rememberRemotePeer(peer);if(!chat.msgs.some(item=>String(item.id)===String(message.id)))chat.msgs.push(mapRemoteMessage(message,peer.id));const active=S.view==='chat'&&S.thread===peer.id;if(active)paintThread();else chat.unread++;save();if(S.view==='chat'&&!S.thread)paintChatBody()}
function openExpertConversation(peer,callKind){if(needLogin())return;if(!curUser().remoteId){toast(t('communications_sign_in'));DB.session=null;save();S.auth='login';go('account',{auth:'login'});return}const chat=rememberRemotePeer(peer);save();if(callKind)PENDING_CALL={peerId:peer.id,kind:callKind};S.ct='chats';go('chat',{thread:chat.id})}
function ensureChat(id){const u=curUser();let c=u.chats[id];if(!c){const ct=contactOf(id);c=u.chats[id]={id,type:'dm',name:ct?ct.name:'Conversation',unread:0,msgs:[]}}return c}
const chatTitle=c=>{if(c.type==='dm'){const ct=contactOf(c.id);return ct?ct.name:c.name}return c.name};
const gate=heading=>`<div class="view"><div class="empty"><b>${heading}</b>You need an account to use this feature.<p style="margin-top:1rem"><button class="btn" data-act="go" data-v="account">Log in or sign up</button></p></div></div>`;
const previewOf=m=>!m?'No messages':m.kind==='image'?'📷 Photos':m.kind==='voice'?'🎤 Voice message':m.kind==='file'?'📎 '+(m.name||'File'):m.kind==='sys'?m.text:(m.text||'').slice(0,60);

function chatList(){const u=curUser(),q=(S.cq||'').toLowerCase();
  const l=Object.values(u.chats).filter(c=>{const ct=c.type==='dm'?contactOf(c.id):null;return !(ct&&ct.blocked)&&chatTitle(c).toLowerCase().includes(q)})
   .sort((a,b)=>{const fa=(contactOf(a.id)||{}).fav?1:0,fb=(contactOf(b.id)||{}).fav?1:0;if(fa!==fb)return fb-fa;const ta=a.msgs.length?a.msgs[a.msgs.length-1].ts:0,tb=b.msgs.length?b.msgs[b.msgs.length-1].ts:0;return tb-ta});
  if(!l.length)return`<div class="empty"><b>${t('no_chats')}</b>${t('no_chats_sub')}</div>`;
  return`<div class="list pad">${l.map(c=>{const last=c.msgs[c.msgs.length-1],ct=c.type==='dm'?contactOf(c.id):null,n=chatTitle(c);
   return`<button class="item" data-act="openThread" data-id="${esc(c.id)}">${av(n,'',colorOf(c.id))}<span class="grow"><b>${esc(n)}</b>${ct&&ct.fav?' '+ic('star','fill'):''}<br><span class="muted small">${PRIV().secure?'Message preview hidden':esc(previewOf(last))}</span></span><span class="muted small">${last?hhmm(last.ts):''}</span>${c.unread?`<span class="badge">${c.unread}</span>`:''}</button>`}).join('')}</div>`}

function callsBody(){const u=curUser();
  return`<div class="pad"><button class="btn sm" data-act="newCall">${ic('phone')} ${t('btn_new_call')}</button></div>${u.calls.length?`<div class="list pad">${u.calls.map(c=>{const ct=contactOf(c.contactId);if(!ct)return'';return`<div class="item">${av(ct.name,'',colorOf(c.contactId))}<span class="grow"><b>${esc(ct.name)}</b><br><span class="muted small">${c.kind==='video'?'Video':'Audio'} · ${esc(c.res)} · ${ago(c.ts)}</span></span><button class="icon-btn" data-act="call" data-id="${esc(c.contactId)}" data-k="${c.kind}" aria-label="Call again">${ic(c.kind==='video'?'video':'phone')}</button></div>`}).join('')}</div>`:`<div class="empty"><b>${t('no_calls')}</b>No call history found.</div>`}`}

function statusBody(){
  const u=curUser(),cut=now()-864e5,l=u.statuses.filter(s=>s.ts>cut);
  const mine=l.filter(s=>s.by==='me');
  const others=l.filter(s=>s.by!=='me'&&!(contactOf(s.by)||{}).blocked);
  
  const groupedOthers={};
  others.forEach(s=>{
    groupedOthers[s.by]=groupedOthers[s.by]||[];
    groupedOthers[s.by].push(s);
  });

  return`<div class="pad" style="padding-bottom:5.5rem">
    <!-- My Status Section -->
    <div class="card" style="margin-bottom:1.2rem;background:transparent;border:none;padding:0">
      <div class="item" style="padding:.4rem 0">
        <div style="position:relative;cursor:pointer" data-act="${mine.length?'viewStatus':'openWAEditor'}" data-id="${mine.length?mine[0].id:''}">
          ${av(u.name,mine.length?'ring':'',colorOf(u.id))}
          ${!mine.length?`<span style="position:absolute;bottom:0;right:0;width:1.4rem;height:1.4rem;border-radius:50%;background:#25d366;color:#0b141a;display:grid;place-items:center;font-weight:900;font-size:1rem;border:2px solid var(--surface)">+</span>`:''}
        </div>
        <div class="grow" style="cursor:pointer" data-act="${mine.length?'viewStatus':'openWAEditor'}" data-id="${mine.length?mine[0].id:''}">
          <b style="font-size:1.05rem">${t('lbl_my_status')}</b><br>
          <span class="muted small">${mine.length?`${mine.length} status update${mine.length>1?'s':''} · ${ago(mine[mine.length-1].ts)}`:(curLang()==='sw'?'Gusa kuweka sasisho la status':'Tap to add status update')}</span>
        </div>
        ${mine.length?`
          <button class="icon-btn" data-act="openWAEditor" aria-label="Add status" title="Add status">${ic('camera')}</button>
          <button class="icon-btn" data-act="myStatusMenu" aria-label="Status options">${ic('more')}</button>
        `:`
          <button class="icon-btn" data-act="openWAEditor" aria-label="Add status" title="Add status">${ic('camera')}</button>
        `}
      </div>
    </div>

    <!-- Recent Updates Section -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin:.8rem 0 .5rem">
      <h4 style="font-size:.8rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)">
        ${curLang()==='sw'?'Sasisho za Hivi Karibuni':'Recent updates'}
      </h4>
    </div>
    ${Object.keys(groupedOthers).length?`
      <div class="list">
        ${Object.entries(groupedOthers).map(([peerId,stList])=>{
          const ct=contactOf(peerId)||{name:'Mkulima'};
          const latest=stList[stList.length-1];
          return`<button class="item" data-act="viewStatus" data-id="${latest.id}">
            ${av(ct.name,'ring',colorOf(peerId))}
            <span class="grow">
              <b>${esc(ct.name)}</b>
              ${latest.music?` <span class="wa-music-badge" style="font-size:.68rem;padding:.15rem .5rem;margin-left:.3rem">🎵 ${esc(latest.music.title)}</span>`:''}
              <br>
              <span class="muted small">${ago(latest.ts)}</span>
            </span>
          </button>`;
        }).join('')}
      </div>
    `:`<div class="empty" style="padding:1.6rem 0">
      <b>${t('no_status')}</b>
      ${curLang()==='sw'?'Marafiki zako wakiweka status zitaonekana hapa.':'Updates from your contacts will appear here.'}
    </div>`}

    <!-- Status Security & Privacy Notice -->
    <div class="muted small" style="text-align:center;margin:2.2rem 0 .5rem;display:flex;align-items:center;justify-content:center;gap:.4rem">
      🔒 ${curLang()==='sw'?'Sasisho zako za status zinalindwa kwa usalama kamili':'Your status updates are end-to-end encrypted'}
    </div>
  </div>

  <!-- WhatsApp Status Floating Action Buttons -->
  <div class="wa-status-fabs">
    <button class="wa-fab-pen" data-act="openWATextStatus" aria-label="Text status" title="Text status">${ic('pen')}</button>
    <button class="wa-fab-cam" data-act="openWAEditor" aria-label="Camera status" title="Camera/Video status">${ic('camera')}</button>
  </div>`;
}

function channelsBody(){const u=curUser();
  if(S.cv&&S.cv.startsWith('ch:')){const ch=u.channels.find(c=>c.id===S.cv.slice(3));if(ch)return`<div class="pad"><div class="row"><button class="icon-btn" data-act="chBack" aria-label="Back">${ic('back')}</button><div class="grow"><b>${esc(ch.name)}</b><br><span class="muted small">${esc(ch.desc)}</span></div><button class="btn sm ${ch.followed||ch.mine?'ghost':''}" data-act="chFollow" data-id="${ch.id}">${ch.mine?t('channel_yours'):ch.followed?t('btn_following'):t('btn_follow')}</button></div>
    ${ch.mine?`<form class="row" data-form="chpost" data-id="${ch.id}" style="margin:.8rem 0"><input class="field grow" name="t" maxlength="300" placeholder="Write a channel broadcast" aria-label="Broadcast message"><button class="btn" aria-label="Send">${ic('send')}</button></form>`:''}
    <div style="margin-top:.6rem">${ch.posts.length?ch.posts.slice().sort((a,b)=>b.ts-a.ts).map(p=>`<div class="card" style="margin-bottom:.6rem"><p>${esc(p.text)}</p><span class="muted small">${ago(p.ts)}</span></div>`).join(''):'<div class="empty">No broadcast messages yet.</div>'}</div></div>`}
  const q=(S.chq||'').toLowerCase();
  return`<div class="pad"><div class="row"><div class="searchbar grow">${ic('search')}<input id="chq" value="${esc(S.chq||'')}" placeholder="${t('search_channels_ph')}" aria-label="Search channels"></div><button class="btn sm" data-act="chCreate">${ic('plus')} ${t('btn_create_channel')}</button></div><div id="chlist">${chList(q)}</div></div>`}

function chList(q){const l=curUser().channels.filter(c=>c.name.toLowerCase().includes(q));return l.length?`<div class="list" style="margin-top:.6rem">${l.map(c=>`<button class="item" data-act="chOpen" data-id="${c.id}">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.desc)}</span></span>${c.mine?'<span class="pill">Mine</span>':c.followed?'<span class="pill">Following</span>':''}</button>`).join('')}</div>`:'<div class="empty">No channels found.</div>'}
const chatBodyFor=()=>S.ct==='calls'?callsBody():S.ct==='status'?statusBody():S.ct==='channels'?channelsBody():`<div class="pad"><div class="searchbar">${ic('search')}<input id="cq" value="${esc(S.cq||'')}" placeholder="${t('search_chats_ph')}" aria-label="Search conversations"></div></div><div id="clist">${chatList()}</div><button class="fab" data-act="newChat" aria-label="New chat">${ic('chat')}</button>`;
const paintChatBody=()=>{const b=$('#cbody');if(b)b.innerHTML=chatBodyFor()};

function msgsHTML(c){
  return c.msgs.map(m=>{
    if(m.kind==='sys')return`<div class="m sys">${esc(m.text)}</div>`;
    const me=m.from==='me';
    let body;
    if(m.kind==='image'){
      body=safeSrc(m.src)?`<img src="${safeSrc(m.src)}" alt="Photo">`:'📷 Photo no longer available';
    }else if(m.kind==='voice'){
      body=`<div class="voice-note-box">
        <button class="vn-play-btn" data-act="toggleVoiceNote" data-src="${safeSrc(m.src)}" aria-label="Play audio">${ic('play')}</button>
        <div class="vn-waveform">
          ${[5,10,14,7,12,16,10,14,8,13,9,15,11,6,12].map(h=>`<div class="vn-bar" style="height:${h}px"></div>`).join('')}
        </div>
        <span class="muted small">${m.dur?Math.floor(m.dur/60)+':'+String(m.dur%60).padStart(2,'0'):'0:05'}</span>
      </div>`;
    }else if(m.kind==='video_note'){
      body=`<div class="video-note-bubble" data-act="toggleVideoNote">
        <video src="${safeSrc(m.src)}" loop autoplay playsinline muted></video>
        <span class="video-note-badge">▶ ${m.dur?m.dur+'s':''} · Tap sound</span>
      </div>`;
    }else if(m.kind==='sticker'){
      body=`<div class="m-sticker">
        ${m.src?`<img src="${safeSrc(m.src)}" alt="Sticker">`:`<span class="stk-emoji">${esc(m.text||'🌱')}</span>`}
      </div>`;
    }else if(m.kind==='file'){
      body=`📎 ${esc(m.name||'File')}`;
    }else{
      body=m.from==='ai'?md(m.text):esc(m.text);
    }

    const rx=m.reactions&&Object.keys(m.reactions).length
      ?`<div class="m-reactions" data-act="msgActions" data-mid="${m.id}">${Object.keys(m.reactions).join(' ')}</div>`
      :'';

    return`<div class="m ${me?'me':'them'}" data-mid="${m.id}" data-act="msgActions" title="Tap for reactions & actions">
      ${body}
      <span style="display:block;text-align:right;font-size:.65rem;opacity:.65">${hhmm(m.ts)}</span>
      ${rx}
    </div>`;
  }).join('')+(TYPING[c.id]?'<div class="m them"><span class="pulse"></span> Typing…</div>':'')}

function paintThread(){const u=curUser(),c=u&&u.chats[S.thread],b=$('#msgs');if(c&&b){b.innerHTML=msgsHTML(c);b.scrollTop=b.scrollHeight}}
function composeHTML(remote=false){
  if(REC)return`<button class="icon-btn" data-act="recCancel" aria-label="Cancel">${ic('trash')}</button><span class="rec"><span class="pulse" style="background:var(--danger)"></span> ${t('recording_label')} <span id="recT">0:00</span></span><button class="btn" data-act="rec" aria-label="Send audio">${ic('send')}</button>`;
  return`<button class="icon-btn" data-act="thAttach" aria-label="Attach">${ic('plus')}</button>
  <button class="icon-btn" data-act="openStickerPicker" aria-label="Stickers & Emojis">${ic('smile')}</button>
  <textarea class="field" id="msgText" rows="1" placeholder="${t('ph_message')}" aria-label="Message"></textarea>
  <button class="icon-btn" data-act="recordVideoNote" aria-label="Circular Video Note" title="Circular Video Note">${ic('video')}</button>
  <button class="icon-btn" id="micBtn" data-act="rec" aria-label="Record">${ic('mic')}</button>
  <button class="btn hidden" id="sendBtn" data-act="thSend" aria-label="Send">${ic('send')}</button>`}
const paintCompose=()=>{const c=$('#compose');if(c)c.innerHTML=composeHTML()};

function threadHTML(){const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null,n=chatTitle(c),remote=!!(ct&&ct.remote);c.unread=0;
  const sub=ct?(ct.ai?'Agro AI':ct.role||''):c.type==='group'?'Group':'';
  return`<div class="fillabs thread" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><button class="icon-btn" data-act="thBack" aria-label="Back">${ic('back')}</button>${av(n,'sm',colorOf(c.id))}<div class="grow"><b>${esc(n)}</b><br><span class="muted small">${esc(sub)}</span></div>${c.type==='dm'&&!ct?.ai?`<button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Audio call" title="${t('btn_call')}">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Video call" title="${t('btn_call')}">${ic('video')}</button>`:''}<button class="icon-btn" data-act="thMenu" aria-label="Menu">${ic('more')}</button></div>
  <div class="msgs" id="msgs">${msgsHTML(c)}</div><div id="emoRow" class="emojis hidden" style="padding:.3rem .6rem;background:var(--surface)">${EMO.map(e=>`<button type="button" data-act="emo" data-e="${e}" aria-label="Emoji ${e}">${e}</button>`).join('')}</div><div class="compose" id="compose">${composeHTML(remote)}</div></div>`}

VIEWS.chat=()=>{if(!curUser())return gate(t('nav_chat'));if(S.thread)return threadHTML();
  const titles={chats:t('ct_chats'),calls:t('ct_calls'),status:t('ct_status'),channels:t('ct_channels')};
  return`<div class="fillabs" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><h2>${titles[S.ct]}</h2>${S.ct==='chats'?`<button class="icon-btn" data-act="cmenu" aria-label="Menu">${ic('more')}</button>`:''}</div><div class="cbody" id="cbody" style="position:relative">${chatBodyFor()}</div>
  <div class="ctabs" role="tablist">${[['chats','chat',t('ct_chats')],['calls','phone',t('ct_calls')],['status','status',t('ct_status')],['channels','mega',t('ct_channels')]].map(([i,c,l])=>`<button role="tab" class="${S.ct===i?'on':''}" data-act="ctab" data-t="${i}">${ic(c)}<span>${l}</span></button>`).join('')}</div></div>`};

POST.chat=()=>{const b=$('#msgs');if(b)b.scrollTop=b.scrollHeight;syncRemoteThread();if(PENDING_CALL){const pending=PENDING_CALL;PENDING_CALL=null;startInternalCall(pending.peerId,pending.kind)}};
ACT.ctab=el=>{S.ct=el.dataset.t;S.cv=null;render()};
ACT.openThread=el=>{if(needLogin())return;ensureChat(el.dataset.id);S.ct='chats';go('chat',{thread:el.dataset.id})};
ACT.expertChat=el=>openExpertConversation({id:el.dataset.id,name:el.dataset.name,role:el.dataset.role});
ACT.expertCall=el=>openExpertConversation({id:el.dataset.id,name:el.dataset.name,role:el.dataset.role},'voice');
ACT.thBack=()=>{S.thread=null;if(REC)recStop(true);render()};

async function sendMsg(chatId,text,extra){const c=ensureChat(chatId);if(c.remote){if(extra&&extra.kind)return toast(t('remote_text_only'));try{const result=await communicationsRequest(`/threads/${encodeURIComponent(chatId)}/messages`,{text},'POST');const message=mapRemoteMessage(result.message,chatId);if(!c.msgs.some(item=>String(item.id)===String(message.id)))c.msgs.push(message);save();if(S.view==='chat'&&S.thread===chatId)paintThread()}catch(e){toast(e.message||t('verification_unavailable'))}return}c.msgs.push(Object.assign({id:uid('m'),from:'me',kind:'text',text,ts:now()},extra||{}));save();if(S.view==='chat'&&S.thread===chatId)paintThread();
  const ct=c.type==='dm'?contactOf(chatId):null;if(ct&&ct.ai&&!ct.blocked&&(!extra||!extra.kind||extra.kind==='text'))await botReply(ct,c)}

async function botReply(ct,c){const key=c.id;TYPING[key]=true;if(S.view==='chat'&&S.thread===key)paintThread();
  const hist=c.msgs.filter(m=>m.kind==='text'&&m.text).slice(-12).map(m=>({role:m.from==='me'?'user':'assistant',content:m.text}));
  while(hist.length&&hist[0].role==='assistant')hist.shift();
  let reply;try{reply=(await runAI(hist,{system:BASE_SYS})).text}catch(e){reply=(e&&e.text)||localGuide(hist.length?hist[hist.length-1].content:'')||aiErr(e)}
  TYPING[key]=false;const u=curUser();if(!u||!u.chats[key])return;u.chats[key].msgs.push({id:uid('m'),from:ct.id,kind:'text',text:reply,ts:now()});
  const open=S.view==='chat'&&S.thread===key;if(!open)u.chats[key].unread++;save();if(S.view==='chat'){if(open)paintThread();else if(!S.thread&&S.ct==='chats')paintChatBody()}}

ACT.thSend=()=>{const tBox=$('#msgText');if(!tBox)return;const v=tBox.value.trim();if(!v)return;tBox.value='';tBox.style.height='';const send=$('#sendBtn'),mic=$('#micBtn');if(send)send.classList.add('hidden');if(mic)mic.classList.remove('hidden');sendMsg(S.thread,v)};
ACT.emoToggle=()=>{const r=$('#emoRow');if(r)r.classList.toggle('hidden')};
ACT.thAttach=()=>sheet(t('attach_title'),`<div class="menu">
  <button data-act="thFile" data-k="image">${ic('image')} ${t('attach_photo')}</button>
  <button data-act="thFile" data-k="video">${ic('video')} Video</button>
  <button data-act="thFile" data-k="file">${ic('clip')} ${t('attach_file')}</button>
  <button data-act="openStickerPicker">${ic('smile')} Stickers & Emojis</button>
  <button data-act="recordVideoNote">${ic('video')} Circular Video Note</button>
</div>`);
ACT.thCamera=()=>attachTo('image','environment');
ACT.thFile=el=>{closeSheet();attachTo(el.dataset.k)};
async function attachTo(k,cap){if(!ST().perm.file&&!cap)return toast(t('perm_file_disabled'));if(cap&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  const f=await pickFile(k==='image'?'image/*':k==='video'?'video/*':'',cap);if(!f)return;try{
    if(k==='image')sendMsg(S.thread,'',{kind:'image',src:await imgToData(f,900,.7)});
    else if(k==='video')sendMsg(S.thread,'',{kind:'video_note',src:await fileToData(f),dur:15});
    else sendMsg(S.thread,'',{kind:'file',name:f.name,size:f.size});
  }catch(e){toast('Could not read file.')}}

ACT.rec=()=>{if(REC)recStop(false);else recStart()};ACT.recCancel=()=>recStop(true);
async function recStart(){if(!ST().perm.mic)return toast(t('perm_mic_disabled'));if(!navigator.mediaDevices||!window.MediaRecorder)return toast(t('audio_unsupported'));
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),mr=new MediaRecorder(st),ch=[];mr.ondataavailable=e=>{if(e.data&&e.data.size)ch.push(e.data)};REC={mr,st,ch,t0:now(),cancel:false,chat:S.thread};
    mr.onstop=()=>{st.getTracks().forEach(tTr=>tTr.stop());const r=REC;REC=null;clearInterval(recT);paintCompose();if(!r||r.cancel)return;const blob=new Blob(r.ch,{type:mr.mimeType||'audio/webm'});const reader=new FileReader();reader.onload=()=>sendMsg(r.chat,'',{kind:'voice',src:reader.result,dur:Math.round((now()-r.t0)/1000)});reader.readAsDataURL(blob)};
    mr.start();recT=setInterval(()=>{const e=$('#recT');if(e&&REC){const s=Math.floor((now()-REC.t0)/1000);e.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}},500);paintCompose()}catch(e){toast('Please allow microphone permissions to record audio.')}}
function recStop(cancel){if(!REC)return;REC.cancel=!!cancel;try{REC.mr.stop()}catch(e){REC=null;paintCompose()}}

let CURRENT_VN_AUDIO=null;
ACT.toggleVoiceNote=el=>{
  const src=el.dataset.src;if(!src)return;
  if(CURRENT_VN_AUDIO&&CURRENT_VN_AUDIO._src===src&&!CURRENT_VN_AUDIO.paused){
    CURRENT_VN_AUDIO.pause();el.innerHTML=ic('play');return;
  }
  if(CURRENT_VN_AUDIO){CURRENT_VN_AUDIO.pause();document.querySelectorAll('.vn-play-btn').forEach(b=>{b.innerHTML=ic('play')});}
  const aud=new Audio(src);aud._src=src;CURRENT_VN_AUDIO=aud;el.innerHTML=ic('pause');
  aud.play().catch(()=>{});aud.onended=()=>{el.innerHTML=ic('play');};
};

ACT.toggleVideoNote=el=>{
  const vid=el.querySelector('video'),badge=el.querySelector('.video-note-badge');
  if(!vid)return;vid.muted=!vid.muted;
  if(badge)badge.textContent=vid.muted?'🔇 Muted · Tap sound':'🔊 Sound ON';
};

/* WhatsApp Circular Video Note Recorder */
let VN_MEDIA_RECORDER=null,VN_STREAM=null,VN_CHUNKS=[],VN_T0=0,VN_INTERVAL=null;
ACT.recordVideoNote=()=>{
  sheet('Circular Video Note',`
    <div style="display:flex;flex-direction:column;align-items:center;padding:1rem">
      <div class="video-note-bubble" style="width:200px;height:200px;margin-bottom:1rem">
        <video id="vnCamPreview" autoplay playsinline muted style="width:100%;height:100%;object-fit:cover"></video>
      </div>
      <div id="vnRecTimer" class="muted small" style="margin-bottom:.8rem">Max length: 60s</div>
      <div class="row">
        <button class="btn danger" id="vnStartRecBtn" data-act="startVNRecord">${ic('video')} Start Recording</button>
        <button class="btn ghost hidden" id="vnStopRecBtn" data-act="stopVNRecord">${ic('check')} Finish & Send</button>
      </div>
    </div>
  `);
  setTimeout(initVNCam,100);
};

async function initVNCam(){
  const v=$('#vnCamPreview');
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return toast('Camera not supported in browser.');
  try{
    VN_STREAM=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:true});
    if(v)v.srcObject=VN_STREAM;
  }catch(e){toast('Camera permission required.');}
}
ACT.startVNRecord=()=>{
  if(!VN_STREAM)return toast('Camera not ready');
  VN_CHUNKS=[];VN_MEDIA_RECORDER=new MediaRecorder(VN_STREAM);
  VN_MEDIA_RECORDER.ondataavailable=e=>{if(e.data&&e.data.size)VN_CHUNKS.push(e.data)};
  VN_MEDIA_RECORDER.start();VN_T0=now();
  const st=$('#vnStartRecBtn'),sp=$('#vnStopRecBtn');
  if(st)st.classList.add('hidden');if(sp)sp.classList.remove('hidden');
  clearInterval(VN_INTERVAL);
  VN_INTERVAL=setInterval(()=>{
    const s=Math.floor((now()-VN_T0)/1000);
    const tm=$('#vnRecTimer');if(tm)tm.textContent=`Recording: 0:${String(s).padStart(2,'0')} / 60s`;
    if(s>=60)ACT.stopVNRecord();
  },500);
};
ACT.stopVNRecord=()=>{
  clearInterval(VN_INTERVAL);if(!VN_MEDIA_RECORDER)return;
  const dur=Math.max(1,Math.round((now()-VN_T0)/1000));
  VN_MEDIA_RECORDER.onstop=()=>{
    if(VN_STREAM)VN_STREAM.getTracks().forEach(tr=>tr.stop());
    const blob=new Blob(VN_CHUNKS,{type:'video/webm'});
    const reader=new FileReader();
    reader.onload=()=>{sendMsg(S.thread,'',{kind:'video_note',src:reader.result,dur});closeSheet();};
    reader.readAsDataURL(blob);
  };
  VN_MEDIA_RECORDER.stop();
};

/* WhatsApp Stickers & Emojis */
const DEFAULT_FARM_STICKERS=['🌾','🌽','🍅','🥑','🐄','🐐','🐔','🚜','🌱','🥕','🥬','🌻','🐝','🍎','💧','🪴','🥚','🍯','🐂','🌿'];
const DEFAULT_REACTION_STICKERS=['👍','❤️','😂','😮','😢','🙏','🔥','👏','💯','🎉','✨','🥳','🤝','💚','🚜','🏆','⚡','🌟'];

ACT.openStickerPicker=()=>{
  sheet('Stickers & Emojis',`
    <div class="wa-picker-tabs">
      <button class="wa-picker-tab active" data-act="switchStkTab" data-tab="farm">🌾 Kilimo</button>
      <button class="wa-picker-tab" data-act="switchStkTab" data-tab="react">👍 Reactions</button>
      <button class="wa-picker-tab" data-act="switchStkTab" data-tab="custom">⭐ My Stickers</button>
    </div>
    <div id="stkGrid" class="stickers-grid">
      ${DEFAULT_FARM_STICKERS.map(s=>`<button class="stk-btn" data-act="sendSticker" data-s="${s}">${s}</button>`).join('')}
    </div>
    <div class="row" style="padding:.5rem .7rem;border-top:1px solid var(--line)">
      <button class="btn sm ghost grow" data-act="createCustomSticker">${ic('plus')} Create from Photo</button>
    </div>
  `);
};

ACT.switchStkTab=el=>{
  document.querySelectorAll('.wa-picker-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const tab=el.dataset.tab,grid=$('#stkGrid');
  if(!grid)return;
  if(tab==='farm'){
    grid.innerHTML=DEFAULT_FARM_STICKERS.map(s=>`<button class="stk-btn" data-act="sendSticker" data-s="${s}">${s}</button>`).join('');
  }else if(tab==='react'){
    grid.innerHTML=DEFAULT_REACTION_STICKERS.map(s=>`<button class="stk-btn" data-act="sendSticker" data-s="${s}">${s}</button>`).join('');
  }else{
    const custom=curUser().customStickers||[];
    if(!custom.length){
      grid.innerHTML=`<div class="empty" style="grid-column:span 5;padding:1rem 0">No custom stickers yet.<br><button class="btn sm" data-act="createCustomSticker" style="margin-top:.4rem">Create one</button></div>`;
    }else{
      grid.innerHTML=custom.map((src,i)=>`
        <button class="stk-btn" data-act="sendCustomSticker" data-idx="${i}" style="padding:0">
          <img src="${safeSrc(src)}" style="width:48px;height:48px;object-fit:cover;border-radius:8px" alt="Stk">
        </button>
      `).join('');
    }
  }
};

ACT.sendSticker=el=>{closeSheet();sendMsg(S.thread,'',{kind:'sticker',text:el.dataset.s})};
ACT.sendCustomSticker=el=>{
  const u=curUser(),src=(u.customStickers||[])[+el.dataset.idx];
  if(!src)return;closeSheet();sendMsg(S.thread,'',{kind:'sticker',src});
};
ACT.createCustomSticker=async()=>{
  const f=await pickFile('image/*');if(!f)return;
  try{
    const data=await imgToData(f,256,.85);
    const u=curUser();u.customStickers=u.customStickers||[];
    u.customStickers.push(data);save();toast('Custom sticker created!');
    ACT.openStickerPicker();
  }catch(e){toast('Failed to create sticker.')}
};

/* WhatsApp Message Actions & Reactions */
ACT.msgActions=el=>{
  const mid=el.dataset.mid,c=ensureChat(S.thread),m=c.msgs.find(x=>x.id===mid);
  if(!m)return;
  sheet('Message Reactions & Actions',`
    <div class="reaction-bar" style="position:static;justify-content:center;margin-bottom:1rem;border-radius:12px">
      ${['👍','❤️','😂','😮','😢','🙏','🔥'].map(emo=>`
        <button class="reaction-btn" data-act="reactMsg" data-mid="${mid}" data-emo="${emo}">${emo}</button>
      `).join('')}
    </div>
    <div class="menu">
      ${m.kind==='sticker'&&m.src?`<button data-act="saveStickerFromMsg" data-mid="${mid}">${ic('star')} Save to My Stickers</button>`:''}
      <button data-act="deleteMsg" data-mid="${mid}">${ic('trash')} Delete message</button>
    </div>
  `);
};

ACT.reactMsg=el=>{
  const mid=el.dataset.mid,emo=el.dataset.emo,c=ensureChat(S.thread),m=c.msgs.find(x=>x.id===mid);
  if(!m)return;
  m.reactions=m.reactions||{};
  if(m.reactions[emo])delete m.reactions[emo];else m.reactions[emo]=1;
  save();closeSheet();paintThread();
};
ACT.deleteMsg=el=>{
  const mid=el.dataset.mid,c=ensureChat(S.thread);
  c.msgs=c.msgs.filter(x=>x.id!==mid);
  save();closeSheet();paintThread();
};
ACT.saveStickerFromMsg=el=>{
  const mid=el.dataset.mid,c=ensureChat(S.thread),m=c.msgs.find(x=>x.id===mid);
  if(m&&m.src){
    const u=curUser();u.customStickers=u.customStickers||[];
    if(!u.customStickers.includes(m.src)){u.customStickers.push(m.src);save()}
    toast('Sticker saved to My Stickers!');
  }
  closeSheet();
};

ACT.thMenu=()=>{const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null;
  sheet(chatTitle(c),`<div class="menu">${ct?`<button data-act="viewContact">${ic('user')} View contact</button><button data-act="favContact">${ic('star')} ${ct.fav?'Remove favorite':'Mark favorite'}</button>`:`<button data-act="viewContact">${ic('users')} Participants</button>`}<button data-act="thMedia">${ic('image')} Media gallery</button>${ct&&!ct.ai?`<button data-act="blockContact">${ic('ban')} Block contact</button>`:''}<button data-act="clearChat">${ic('trash')} Clear chat history</button></div>`)};
ACT.viewContact=()=>{const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null;
  sheet(chatTitle(c),ct?`<div class="prof">${av(ct.name,'lg',colorOf(ct.id))}<b>${esc(ct.name)}</b><span class="muted">${esc(ct.role||'')}</span></div>`:`<div class="list">${(c.members||[]).map(id=>{const m=contactOf(id);return m?`<div class="item">${av(m.name,'sm',colorOf(id))}<span>${esc(m.name)}</span></div>`:''}).join('')||'<div class="empty">Participants will appear here.</div>'}</div>`)};
ACT.favContact=()=>{const ct=contactOf(S.thread);ct.fav=!ct.fav;save();closeSheet();toast(ct.fav?'Added to favorites':'Removed from favorites')};
ACT.thMedia=()=>{const c=ensureChat(S.thread),im=c.msgs.filter(m=>m.kind==='image'&&safeSrc(m.src));sheet('Media',im.length?`<div class="thumbs">${im.map(m=>`<div class="thumb"><img src="${safeSrc(m.src)}" alt="Photo"></div>`).join('')}</div>`:'<div class="empty">No photos in this conversation.</div>')};
ACT.blockContact=()=>{const ct=contactOf(S.thread);if(!ct)return;ct.blocked=true;if(PRIV().autoDelBlocked)delete curUser().chats[ct.id];save();S.thread=null;closeSheet();render();toast(ct.name+' has been blocked')};
ACT.clearChat=()=>{const c=ensureChat(S.thread);c.msgs=[];save();closeSheet();paintThread()};
ACT.cmenu=()=>sheet('Menu',`<div class="menu"><button data-act="communities">${ic('users')} ${t('menu_communities')}</button><button data-act="newGroup">${ic('plus')} ${t('menu_new_group')}</button><button data-act="contacts">${ic('user')} ${t('menu_contacts')}</button><button data-act="invite">${ic('send')} ${t('menu_invite')}</button><button data-act="blockedList">${ic('ban')} ${t('menu_blocked')}</button><button data-act="go" data-v="settings">${ic('settings')} ${t('nav_settings')}</button></div>`);
const contactRows=(act,extra)=>curUser().contacts.filter(c=>!c.blocked&&(extra?!c.ai:true)).map(c=>`<button class="item" data-act="${act}" data-id="${esc(c.id)}">${av(c.name,'sm',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.role||'')}</span></span></button>`).join('');
ACT.newChat=()=>sheet(t('btn_new_chat'),`<div class="list">${contactRows('openThread')}</div>`);
ACT.contacts=()=>sheet(t('menu_contacts'),`<div class="list">${contactRows('openThread')}</div>`);
ACT.blockedList=()=>{const b=curUser().contacts.filter(c=>c.blocked);sheet(t('menu_blocked'),b.length?`<div class="list">${b.map(c=>`<div class="item">${av(c.name,'sm')}<span class="grow">${esc(c.name)}</span><button class="btn ghost sm" data-act="unblock" data-id="${esc(c.id)}">Unblock</button></div>`).join('')}</div>`:'<div class="empty">No blocked users.</div>')};
ACT.unblock=el=>{const c=contactOf(el.dataset.id);if(c)c.blocked=false;save();ACT.blockedList();if(S.view==='chat'&&!S.thread)paintChatBody()};
ACT.communities=()=>{const u=curUser();sheet(t('menu_communities'),`<div class="list">${u.communities.map(c=>`<div class="item">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.desc)}</span></span><button class="btn ${c.joined?'ghost':''} sm" data-act="joinComm" data-id="${c.id}">${c.joined?'Leave':'Join'}</button></div>`).join('')}</div>`)};
ACT.joinComm=el=>{const u=curUser(),c=u.communities.find(x=>x.id===el.dataset.id);if(!c)return;c.joined=!c.joined;if(c.joined)u.chats[c.id]={id:c.id,type:'group',name:c.name,unread:0,members:[],msgs:[{id:uid('m'),kind:'sys',text:'Joined '+c.name+' community.',ts:now()}]};else delete u.chats[c.id];save();ACT.communities();if(S.view==='chat'&&!S.thread)paintChatBody()};
ACT.newGroup=()=>sheet(t('menu_new_group'),`<form class="form" data-form="group"><label class="lab">Group name<input class="field" name="name" required maxlength="40"></label><div>${curUser().contacts.filter(c=>!c.ai&&!c.blocked).map(c=>`<label class="radio"><input type="checkbox" name="m" value="${esc(c.id)}"> ${esc(c.name)}</label>`).join('')||'<span class="muted small">Add contacts first via "Invite a friend".</span>'}</div><button class="btn">Create group</button></form>`);
FORM.group=f=>{const u=curUser(),id=uid('g'),m=[...f.querySelectorAll('input[name=m]:checked')].map(i=>i.value);u.chats[id]={id,type:'group',name:fv(f,'name').trim(),unread:0,members:m,msgs:[{id:uid('m'),kind:'sys',text:'Group created.',ts:now()}]};save();closeSheet();S.ct='chats';go('chat',{thread:id})};
ACT.invite=()=>sheet(t('menu_invite'),`<form class="form" data-form="invite"><label class="lab">Name (optional)<input class="field" name="name" maxlength="40"></label><label class="lab">Phone number (optional)<input class="field" name="phone" inputmode="tel" maxlength="20" placeholder="+255..."></label><button class="btn">Prepare invite</button></form>`);
FORM.invite=f=>{const u=curUser(),name=fv(f,'name').trim(),ph=fv(f,'phone').replace(/\D/g,''),txt='Join me on MIMI NI MKULIMA, the agricultural and livestock platform: '+location.href.split('#')[0];
  if(name){u.contacts.push({id:uid('c'),name,role:ph?'+'+ph:'Invited Contact',online:false,fav:false,blocked:false});save()}
  sheet('Invite Ready',`<p class="muted small" style="margin-bottom:.6rem">${esc(txt)}</p><div class="menu"><a href="https://wa.me/${ph}?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener noreferrer">${ic('phone')} Share via WhatsApp</a><button data-act="copyLink" data-url="${esc(txt)}">${ic('link')} Copy message</button></div>${name?`<p class="note">${esc(name)} has been added to your contacts.</p>`:''}`)};

ACT.newCall=()=>sheet(t('btn_new_call'),`<div class="list">${curUser().contacts.filter(c=>!c.blocked&&!c.ai).map(c=>`<div class="item">${av(c.name,'sm',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.role||'')}</span></span><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Audio">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Video">${ic('video')}</button></div>`).join('')||`<div class="empty">${t('no_experts')}</div>`}</div>`);

/* Calling with Web Audio Ringtone, Active Timer HUD & Remote WebRTC */
let RING_AUDIO_CTX=null,RING_INTERVAL=null,CALL_TIMER_INTERVAL=null;
function playCallRingtone(){
  try{
    stopCallRingtone();
    const ctx=new (window.AudioContext||window.webkitAudioContext)();
    RING_AUDIO_CTX=ctx;
    const beep=()=>{
      if(!RING_AUDIO_CTX)return;
      const o1=ctx.createOscillator(),o2=ctx.createOscillator(),g=ctx.createGain();
      o1.type='sine';o2.type='sine';o1.frequency.value=440;o2.frequency.value=480;
      g.gain.setValueAtTime(0.08,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+1.8);
      o1.connect(g);o2.connect(g);g.connect(ctx.destination);
      o1.start();o2.start();o1.stop(ctx.currentTime+1.8);o2.stop(ctx.currentTime+1.8);
    };
    beep();RING_INTERVAL=setInterval(beep,3500);
  }catch(e){}
}
function stopCallRingtone(){
  if(RING_INTERVAL){clearInterval(RING_INTERVAL);RING_INTERVAL=null;}
  if(RING_AUDIO_CTX){try{RING_AUDIO_CTX.close()}catch(e){}RING_AUDIO_CTX=null;}
}

function sendCallSignal(event,data){if(!CALL||!COMM_SOCKET||COMM_SOCKET.readyState!==WebSocket.OPEN)return false;COMM_SOCKET.send(JSON.stringify({type:'signal',to:CALL.peerId,event,data}));return true}
function waitForCommunicationSocket(){connectCommunicationSocket();if(COMM_SOCKET&&COMM_SOCKET.readyState===WebSocket.OPEN)return Promise.resolve();return new Promise((resolve,reject)=>{const socket=COMM_SOCKET,timer=setTimeout(()=>reject(new Error(t('verification_unavailable'))),8000);if(!socket)return reject(new Error(t('verification_unavailable')));socket.addEventListener('open',()=>{clearTimeout(timer);resolve()},{once:true});socket.addEventListener('close',()=>{clearTimeout(timer);reject(new Error(t('verification_unavailable')));},{once:true})})}

function callOverlay(peer,incoming,isVideo){
  const overlay=document.createElement('div');
  overlay.className='callscr';overlay.id='callOverlay';
  overlay.innerHTML=`<video id="callRemoteVideo" autoplay playsinline hidden></video>
    <video id="callLocalVideo" autoplay playsinline muted hidden></video>
    <audio id="callRemoteAudio" autoplay></audio>
    <div class="who">${av(peer.name,'lg',colorOf(peer.id))}
      <h2>${esc(peer.name)}</h2>
      <p id="callSt">${incoming?t('incoming_call'):t('call_connecting')}</p>
      <div id="callTimerHud" class="call-timer-hud hidden">00:00</div>
    </div>
    <div class="call-controls" id="callControls">
      ${incoming?`<button class="answercall" data-act="answerCall" aria-label="${t('call_accept')}" title="${t('call_accept')}">${ic('phone')}</button><button class="endcall" data-act="declineCall" aria-label="${t('call_decline')}" title="${t('call_decline')}">${ic('phone')}</button>`:`
        <div class="call-ctrl-row">
          <button class="call-ctrl-btn" id="callMuteBtn" data-act="toggleCallMute" title="Mute Mic">${ic('mic')}</button>
          ${isVideo?`<button class="call-ctrl-btn" id="callCamBtn" data-act="toggleCallCam" title="Toggle Cam">${ic('video')}</button>`:''}
          <button class="endcall" data-act="endCall" aria-label="${t('call_decline')}" title="${t('call_decline')}">${ic('phone')}</button>
        </div>`}
    </div>`;
  document.body.appendChild(overlay);CALL.overlay=overlay;
}

function callConnectedState(){
  if(!CALL)return;
  stopCallRingtone();
  CALL.startedAt=now();
  const st=$('#callSt'),hud=$('#callTimerHud'),ctrl=$('#callControls');
  if(st)st.textContent=curLang()==='sw'?'Imeunganishwa':'Connected';
  if(hud)hud.classList.remove('hidden');
  if(ctrl&&CALL.incoming){
    ctrl.innerHTML=`<div class="call-ctrl-row">
      <button class="call-ctrl-btn" id="callMuteBtn" data-act="toggleCallMute" title="Mute Mic">${ic('mic')}</button>
      ${CALL.kind==='video'?`<button class="call-ctrl-btn" id="callCamBtn" data-act="toggleCallCam" title="Toggle Cam">${ic('video')}</button>`:''}
      <button class="endcall" data-act="endCall" aria-label="${t('call_decline')}" title="${t('call_decline')}">${ic('phone')}</button>
    </div>`;
  }
  clearInterval(CALL_TIMER_INTERVAL);
  CALL_TIMER_INTERVAL=setInterval(()=>{
    if(!CALL||!CALL.startedAt)return;
    const sec=Math.floor((now()-CALL.startedAt)/1000);
    const m=String(Math.floor(sec/60)).padStart(2,'0'),s=String(sec%60).padStart(2,'0');
    const h=$('#callTimerHud');if(h)h.textContent=`${m}:${s}`;
  },1000);
}

ACT.toggleCallMute=()=>{
  if(!CALL)return;CALL.muted=!CALL.muted;
  if(CALL.stream)CALL.stream.getAudioTracks().forEach(tr=>{tr.enabled=!CALL.muted});
  const btn=$('#callMuteBtn');if(btn)btn.classList.toggle('active',CALL.muted);
  toast(CALL.muted?(curLang()==='sw'?'Maikrofoni imezimwa':'Microphone muted'):(curLang()==='sw'?'Maikrofoni imewashwa':'Microphone unmuted'));
};

ACT.toggleCallCam=()=>{
  if(!CALL||CALL.kind!=='video')return;CALL.camOff=!CALL.camOff;
  if(CALL.stream)CALL.stream.getVideoTracks().forEach(tr=>{tr.enabled=!CALL.camOff});
  const btn=$('#callCamBtn');if(btn)btn.classList.toggle('active',CALL.camOff);
  toast(CALL.camOff?(curLang()==='sw'?'Kamera imezimwa':'Camera turned off'):(curLang()==='sw'?'Kamera imewashwa':'Camera turned on'));
};

async function createCallPeer(peerId,kind){
  const config=await communicationsRequest('/ice-servers');const pc=new RTCPeerConnection({iceServers:config.ice_servers});CALL.pc=pc;
  pc.onicecandidate=event=>{if(event.candidate)sendCallSignal('candidate',event.candidate.toJSON())};
  pc.ontrack=event=>{const stream=event.streams[0];if(kind==='video'){const video=$('#callRemoteVideo');if(video){video.srcObject=stream;video.hidden=false}}else{const audio=$('#callRemoteAudio');if(audio)audio.srcObject=stream}};
  pc.onconnectionstatechange=()=>{const state=pc.connectionState;if(state==='connected')callConnectedState();if(state==='failed'){toast(t('call_unavailable'));finishCall(false)}};
  if(CALL.stream)CALL.stream.getTracks().forEach(track=>pc.addTrack(track,CALL.stream));
  return pc;
}

async function addPendingIceCandidates(){if(!CALL||!CALL.pc||!CALL.pc.remoteDescription)return;for(const candidate of CALL.pendingCandidates.splice(0))await CALL.pc.addIceCandidate(candidate)}

async function startInternalCall(peerId,kind='voice'){
  const contact=contactOf(peerId);if(!contact||CALL)return;
  if(!ST().perm.mic)return toast(t('perm_mic_disabled'));
  if(kind==='video'&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  let stream=null;
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    try{stream=await navigator.mediaDevices.getUserMedia({audio:true,video:kind==='video'});}catch(e){}
  }
  CALL={peerId,kind,stream,pc:null,pendingCandidates:[],incoming:false,startedAt:null,muted:false,camOff:false};
  callOverlay(contact,false,kind==='video');
  const local=$('#callLocalVideo');
  if(local&&kind==='video'&&stream){local.srcObject=stream;local.hidden=false}
  playCallRingtone();
  const status=$('#callSt');if(status)status.textContent=t('call_ringing');

  if(contact.remote){
    try{
      await waitForCommunicationSocket();
      const pc=await createCallPeer(peerId,kind),offer=await pc.createOffer();
      await pc.setLocalDescription(offer);
      if(!sendCallSignal('offer',{description:{type:offer.type,sdp:offer.sdp},kind}))throw new Error(t('verification_unavailable'));
    }catch(e){stopCallRingtone();finishCall(false);toast(e.message||t('call_media_error'));}
  }else{
    setTimeout(()=>{
      if(!CALL||CALL.peerId!==peerId)return;
      callConnectedState();
    },2400);
  }
}

async function acceptIncomingCall(){
  if(!CALL||!CALL.incoming)return;
  try{
    await waitForCommunicationSocket();
    if(!ST().perm.mic)return toast(t('perm_mic_disabled'));
    if(CALL.kind==='video'&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
    const stream=await navigator.mediaDevices.getUserMedia({audio:true,video:CALL.kind==='video'});
    CALL.stream=stream;
    const local=$('#callLocalVideo');if(local&&CALL.kind==='video'){local.srcObject=stream;local.hidden=false}
    const pc=await createCallPeer(CALL.peerId,CALL.kind);
    await pc.setRemoteDescription(CALL.offer);
    await addPendingIceCandidates();
    const answer=await pc.createAnswer();
    await pc.setLocalDescription(answer);
    CALL.incoming=false;
    sendCallSignal('answer',{type:answer.type,sdp:answer.sdp});
    callConnectedState();
  }catch(e){finishCall(true,'decline');toast(e.message||t('call_media_error'))}
}

async function handleCallSignal(payload){
  if(payload.event==='offer'){
    if(CALL){COMM_SOCKET.send(JSON.stringify({type:'signal',to:payload.from,event:'decline'}));return}
    const peer=rememberRemotePeer({id:payload.from,name:payload.name,role:payload.role});if(!peer)return;
    CALL={peerId:payload.from,kind:payload.data.kind,pc:null,stream:null,pendingCandidates:[],incoming:true,offer:payload.data.description,startedAt:null};
    playCallRingtone();
    callOverlay(contactOf(payload.from),true,payload.data.kind==='video');return;
  }
  if(!CALL||CALL.peerId!==payload.from)return;
  if(payload.event==='answer'&&CALL.pc){
    await CALL.pc.setRemoteDescription(payload.data);
    await addPendingIceCandidates();
    callConnectedState();
  }else if(payload.event==='candidate'&&payload.data){
    const candidate=new RTCIceCandidate(payload.data);
    if(CALL.pc&&CALL.pc.remoteDescription)await CALL.pc.addIceCandidate(candidate);else CALL.pendingCandidates.push(candidate);
  }else if(payload.event==='hangup'||payload.event==='decline'){
    finishCall(false);toast(payload.event==='decline'?t('call_unavailable'):'');
  }
}

function finishCall(notify=true,event='hangup'){
  stopCallRingtone();clearInterval(CALL_TIMER_INTERVAL);CALL_TIMER_INTERVAL=null;
  if(!CALL)return;const call=CALL;
  const durSec=call.startedAt?Math.floor((now()-call.startedAt)/1000):0;
  const resLabel=durSec>0?`${Math.floor(durSec/60)}:${String(durSec%60).padStart(2,'0')}`:'Missed';
  const u=curUser();
  if(u&&call.peerId){
    u.calls.unshift({id:uid('c'),contactId:call.peerId,kind:call.kind,ts:now(),res:resLabel});
    save();
  }
  if(notify&&COMM_SOCKET&&COMM_SOCKET.readyState===WebSocket.OPEN&&call.peerId){
    COMM_SOCKET.send(JSON.stringify({type:'signal',to:call.peerId,event}));
  }
  if(call.pc)call.pc.close();
  if(call.stream)call.stream.getTracks().forEach(track=>track.stop());
  if(call.overlay)call.overlay.remove();
  CALL=null;
  if(S.view==='chat'&&S.ct==='calls')paintChatBody();
}

ACT.call=el=>startInternalCall(el.dataset.id||S.thread,el.dataset.k==='video'?'video':'voice');
ACT.answerCall=()=>acceptIncomingCall();
ACT.declineCall=()=>finishCall(true,'decline');
ACT.endCall=()=>finishCall(true);

/* ============ WhatsApp Full Media Studio & Music System ============ */
const WA_BUILTIN_MUSIC=[
  {id:'track_1',title:'Mkulima Hodari',artist:'Agro Beats Tanzania',genre:'Afro Kalimba & Beat',tempo:112},
  {id:'track_2',title:'Mavuno ya Dhahabu',artist:'Daxon Acoustic Band',genre:'Acoustic Guitar & Pluck',tempo:96},
  {id:'track_3',title:'Nguvu ya Ardhi',artist:'Bongo Flava Live',genre:'Upbeat Afrobeat Groove',tempo:118},
  {id:'track_4',title:'Mvua ya Baraka',artist:'Kilimo Lo-Fi Sound',genre:'Peaceful Piano & Nature',tempo:84},
  {id:'track_5',title:'Mfugaji Bora',artist:'Safari Percussion',genre:'Traditional Ngoma & Drums',tempo:124}
];

let WA_SYNTH_CTX=null,WA_SYNTH_TIMER=null,WA_CUSTOM_AUDIO=null,WA_ACTIVE_MUSIC=null,WA_MUSIC_MUTED=false;

function playWAMusic(track,loop=true){
  stopWAMusic();
  if(!track||WA_MUSIC_MUTED)return;
  WA_ACTIVE_MUSIC=track;
  if(track.customSrc){
    try{
      const a=new Audio(track.customSrc);
      a.loop=loop;
      WA_CUSTOM_AUDIO=a;
      a.play().catch(()=>{});
    }catch(e){}
    return;
  }
  try{
    const ctx=new (window.AudioContext||window.webkitAudioContext)();
    WA_SYNTH_CTX=ctx;
    const tempo=track.tempo||112,beatSec=60/tempo;
    let step=0;
    const scales={
      track_1:[293.66,329.63,369.99,440.00,493.88,587.33],
      track_2:[261.63,293.66,329.63,392.00,440.00,523.25],
      track_3:[329.63,369.99,392.00,440.00,493.88,587.33],
      track_4:[220.00,261.63,329.63,392.00,440.00,493.88],
      track_5:[196.00,220.00,261.63,293.66,329.63,392.00]
    };
    const scale=scales[track.id]||scales.track_1;
    const playStep=()=>{
      if(!WA_SYNTH_CTX)return;
      const t=ctx.currentTime;
      const noteFreq=scale[step%scale.length];
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type=track.id==='track_1'?'triangle':track.id==='track_2'?'sine':track.id==='track_4'?'sine':'sawtooth';
      osc.frequency.setValueAtTime(noteFreq,t);
      gain.gain.setValueAtTime(0.08,t);
      gain.gain.exponentialRampToValueAtTime(0.0001,t+beatSec*0.9);
      osc.connect(gain);gain.connect(ctx.destination);
      osc.start(t);osc.stop(t+beatSec*0.9);

      if(step%2===0){
        const kick=ctx.createOscillator(),kickGain=ctx.createGain();
        kick.frequency.setValueAtTime(140,t);
        kick.frequency.exponentialRampToValueAtTime(35,t+0.16);
        kickGain.gain.setValueAtTime(0.18,t);
        kickGain.gain.exponentialRampToValueAtTime(0.001,t+0.16);
        kick.connect(kickGain);kickGain.connect(ctx.destination);
        kick.start(t);kick.stop(t+0.16);
      }
      step++;
      WA_SYNTH_TIMER=setTimeout(playStep,(beatSec*0.5)*1000);
    };
    playStep();
  }catch(e){}
}

function stopWAMusic(){
  if(WA_SYNTH_TIMER){clearTimeout(WA_SYNTH_TIMER);WA_SYNTH_TIMER=null;}
  if(WA_SYNTH_CTX){try{WA_SYNTH_CTX.close()}catch(e){}WA_SYNTH_CTX=null;}
  if(WA_CUSTOM_AUDIO){try{WA_CUSTOM_AUDIO.pause()}catch(e){}WA_CUSTOM_AUDIO=null;}
  WA_ACTIVE_MUSIC=null;
}

let WA_EDITOR_STATE={
  media:null,
  trimStart:0,
  trimEnd:30,
  music:null,
  caption:'',
  textOverlays:[],
  stickers:[],
  doodles:[],
  doodleHistory:[],
  muted:false,
  drawColor:'#25d366',
  drawSize:4,
  filter:'none',
  rotation:0
};

ACT.openWAEditor=()=>sheet(curLang()==='sw'?'Weka Status ya WhatsApp':'Add WhatsApp Status',`
  <div class="menu">
    <button data-act="waPickMedia" data-k="video">${ic('video')} ${curLang()==='sw'?'Video (yenye Trimmer, Filter & Muziki)':'Video (with Trimmer, Filter & Music)'}</button>
    <button data-act="waPickMedia" data-k="image">${ic('image')} ${curLang()==='sw'?'Picha (yenye Filter, Muziki & Maandishi)':'Photo (with Filter, Music & Text)'}</button>
    <button data-act="openWATextStatus">${ic('pen')} ${curLang()==='sw'?'Status ya Maandishi na Rangi':'Text & Color Status'}</button>
  </div>
`);

ACT.waPickMedia=async el=>{
  closeSheet();
  const k=el.dataset.k;
  const f=await pickFile(k==='video'?'video/*':'image/*');
  if(!f)return;
  if(k==='video'){
    const url=URL.createObjectURL(f);
    const tempVid=document.createElement('video');
    tempVid.preload='metadata';tempVid.src=url;
    tempVid.onloadedmetadata=async()=>{
      URL.revokeObjectURL(url);
      const rawDur=Math.max(1,Math.round(tempVid.duration||10));
      try{
        const data=await fileToData(f);
        openWAMediaStudio({
          type:'video',src:data,name:f.name,
          dur:rawDur
        });
      }catch(e){toast('Could not read video file.')}
    };
  }else{
    try{
      const data=await imgToData(f,1080,.85);
      openWAMediaStudio({
        type:'image',src:data,name:f.name,
        dur:5
      });
    }catch(e){toast('Could not read image file.')}
  }
};

function openWAMediaStudio(mediaObj){
  stopWAMusic();
  const maxEnd=mediaObj.type==='video'?Math.min(30,mediaObj.dur||30):5;
  WA_EDITOR_STATE={
    media:mediaObj,
    trimStart:0,
    trimEnd:maxEnd,
    music:null,
    caption:'',
    textOverlays:[],
    stickers:[],
    doodles:[],
    doodleHistory:[],
    muted:false,
    drawColor:'#25d366',
    drawSize:4,
    filter:'none',
    rotation:0
  };

  const overlay=document.createElement('div');
  overlay.className='wa-editor-overlay';
  overlay.id='waEditorOverlay';

  const isVid=mediaObj.type==='video';
  overlay.innerHTML=`
    <!-- Top Bar Tools -->
    <div class="wa-ed-top">
      <button class="wa-tool-btn" data-act="waEdCancel" aria-label="Cancel" title="Cancel">${ic('x')}</button>
      <div class="wa-ed-tools">
        <button class="wa-tool-btn" id="waEdMusicBtn" data-act="waEdMusic" title="Add Music">🎵</button>
        <button class="wa-tool-btn" id="waEdFilterBtn" data-act="waToggleFilterRow" title="Filters">🎨</button>
        <button class="wa-tool-btn" data-act="waRotateMedia" title="Rotate 90°">🔄</button>
        ${isVid?`<button class="wa-tool-btn" id="waEdMuteBtn" data-act="waEdToggleMute" title="Mute Original Sound">${ic('volume')}</button>`:''}
        <button class="wa-tool-btn" id="waEdDoodleBtn" data-act="waEdDoodle" title="Doodle / Pen">✏️</button>
        <button class="wa-tool-btn" data-act="waEdAddText" title="Add Text">🔤</button>
        <button class="wa-tool-btn" data-act="waEdAddSticker" title="Add Sticker">😊</button>
      </div>
    </div>

    <!-- Filter Presets Row (Hidden by default) -->
    <div id="waFilterRow" class="hidden" style="display:flex;gap:.5rem;padding:.4rem .8rem;background:rgba(0,0,0,.7);overflow-x:auto;z-index:10">
      <button class="wa-filter-chip active" data-act="waSetFilter" data-f="none">Normal</button>
      <button class="wa-filter-chip" data-act="waSetFilter" data-f="sepia(0.35) saturate(1.4)">Warm</button>
      <button class="wa-filter-chip" data-act="waSetFilter" data-f="saturate(1.8) contrast(1.15)">Vivid</button>
      <button class="wa-filter-chip" data-act="waSetFilter" data-f="grayscale(1) contrast(1.2)">B&W</button>
      <button class="wa-filter-chip" data-act="waSetFilter" data-f="sepia(0.65) contrast(0.95) brightness(1.1)">Vintage</button>
      <button class="wa-filter-chip" data-act="waSetFilter" data-f="contrast(1.4) saturate(1.2)">Drama</button>
    </div>

    <!-- Doodle Toolbar (Hidden by default) -->
    <div id="waDoodleBar" class="wa-doodle-bar hidden">
      ${['#25d366','#ffffff','#facc15','#ef4444','#38bdf8','#ec4899'].map((c,i)=>`
        <span class="wa-color-dot ${i===0?'active':''}" style="background:${c}" data-act="waSetDoodleColor" data-col="${c}"></span>
      `).join('')}
      <button class="btn ghost sm" data-act="waUndoDoodle" style="padding:.2rem .6rem;font-size:.75rem">↩ Undo</button>
      <button class="btn ghost sm" data-act="waClearDoodle" style="padding:.2rem .6rem;font-size:.75rem">Clear</button>
    </div>

    <!-- Video Filmstrip Trimmer (WhatsApp Max 30s) -->
    ${isVid?`
      <div class="wa-trimmer-wrap">
        <div class="wa-trimmer-info">
          <span>✂️ ${curLang()==='sw'?'Kata Urefu wa Video (Mwisho 30s)':'Trim Video (WhatsApp Max: 30s)'}</span>
          <span id="waTrimDurLabel">${maxEnd.toFixed(1)}s</span>
        </div>
        <div class="wa-trimmer-track">
          <div class="wa-filmstrip">
            ${[1,2,3,4,5,6,7,8].map(()=>'<div class="wa-frame-box"></div>').join('')}
          </div>
          <div class="wa-trim-range" id="waTrimRange" style="left:0%;width:100%"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0 .2rem">
          <div style="display:flex;gap:.4rem">
            <button class="wa-quick-trim-btn" data-act="waQuickTrim" data-dur="15">0 - 15s</button>
            <button class="wa-quick-trim-btn active" data-act="waQuickTrim" data-dur="30">0 - 30s</button>
          </div>
          <div style="display:flex;gap:.6rem;align-items:center">
            <label style="font-size:.7rem;opacity:.8">Start: <input type="range" id="waTrimStart" min="0" max="${Math.max(1,mediaObj.dur-1)}" value="0" step="0.5" style="width:65px"></label>
            <label style="font-size:.7rem;opacity:.8">End: <input type="range" id="waTrimEnd" min="1" max="${Math.min(30,mediaObj.dur)}" value="${maxEnd}" step="0.5" style="width:65px"></label>
          </div>
        </div>
      </div>
    `:''}

    <!-- Music Badge Banner (if added) -->
    <div id="waMusicBannerWrap" style="text-align:center;padding:.2rem;z-index:9;min-height:28px"></div>

    <!-- Media Stage Preview -->
    <div class="wa-ed-stage" id="waEdStage">
      ${isVid
        ?`<video id="waEdVidPreview" src="${safeSrc(mediaObj.src)}" loop autoplay playsinline muted></video>`
        :`<img id="waEdImgPreview" src="${safeSrc(mediaObj.src)}" alt="Preview">`}
      <canvas class="wa-draw-canvas" id="waDrawCanvas"></canvas>
      <div class="wa-stage-overlay" id="waStageOverlay"></div>
    </div>

    <!-- Bottom Controls & Caption -->
    <div class="wa-ed-bottom">
      <div class="wa-privacy-row">
        <span class="wa-privacy-pill">🔒 ${curLang()==='sw'?'Status (Marafiki Zangu)':'Status (My contacts)'}</span>
        <span class="muted small" id="waStageInfoLabel">${isVid?`${maxEnd}s video`:'Photo'}</span>
      </div>
      <div class="wa-caption-row">
        <input class="wa-caption-input" id="waCaptionInput" placeholder="${curLang()==='sw'?'Andika maelezo ya status...':'Add a caption...'}" maxlength="200">
        <button class="wa-send-fab" data-act="waEdSend" aria-label="Send Status" title="Send">${ic('send')}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Setup Trimmer slider & live playback loop
  if(isVid){
    const v=$('#waEdVidPreview'),stSlider=$('#waTrimStart'),endSlider=$('#waTrimEnd'),lbl=$('#waTrimDurLabel'),range=$('#waTrimRange'),info=$('#waStageInfoLabel');
    const updateTrim=()=>{
      let stVal=parseFloat(stSlider.value),endVal=parseFloat(endSlider.value);
      if(endVal<=stVal)endVal=Math.min(mediaObj.dur,stVal+0.5);
      if(endVal-stVal>30)endVal=stVal+30;
      endSlider.value=endVal;stSlider.value=stVal;
      WA_EDITOR_STATE.trimStart=stVal;WA_EDITOR_STATE.trimEnd=endVal;
      const dur=(endVal-stVal).toFixed(1);
      if(lbl)lbl.textContent=`${dur}s / 30.0s`;
      if(info)info.textContent=`${dur}s trimmed video`;
      if(range&&mediaObj.dur){
        const lPct=(stVal/mediaObj.dur)*100,wPct=((endVal-stVal)/mediaObj.dur)*100;
        range.style.left=lPct+'%';range.style.width=Math.min(100,wPct)+'%';
      }
      if(v)v.currentTime=stVal;
    };
    if(stSlider)stSlider.oninput=updateTrim;
    if(endSlider)endSlider.oninput=updateTrim;

    // Keep video looping within trimmed window!
    if(v){
      v.ontimeupdate=()=>{
        if(v.currentTime>=WA_EDITOR_STATE.trimEnd||v.currentTime<WA_EDITOR_STATE.trimStart){
          v.currentTime=WA_EDITOR_STATE.trimStart;
        }
      };
    }
  }

  initDoodleCanvas();
}

ACT.waEdCancel=()=>{
  stopWAMusic();
  const v=$('#waEditorOverlay');if(v)v.remove();
};

/* Quick Trimmer Buttons (15s, 30s) */
ACT.waQuickTrim=el=>{
  const dur=+el.dataset.dur;
  const stSlider=$('#waTrimStart'),endSlider=$('#waTrimEnd');
  if(!stSlider||!endSlider||!WA_EDITOR_STATE.media)return;
  document.querySelectorAll('.wa-quick-trim-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  const maxD=WA_EDITOR_STATE.media.dur||30;
  stSlider.value=0;
  endSlider.value=Math.min(dur,maxD);
  stSlider.dispatchEvent(new Event('input'));
};

/* Filter Presets */
ACT.waToggleFilterRow=()=>{
  const row=$('#waFilterRow');
  if(row)row.classList.toggle('hidden');
};

ACT.waSetFilter=el=>{
  const f=el.dataset.f;
  WA_EDITOR_STATE.filter=f;
  document.querySelectorAll('.wa-filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const target=$('#waEdVidPreview')||$('#waEdImgPreview');
  if(target)target.style.filter=f==='none'?'':f;
  toast('Filter: '+el.textContent);
};

/* Rotate Media */
ACT.waRotateMedia=()=>{
  WA_EDITOR_STATE.rotation=(WA_EDITOR_STATE.rotation+90)%360;
  const target=$('#waEdVidPreview')||$('#waEdImgPreview');
  if(target)target.style.transform=`rotate(${WA_EDITOR_STATE.rotation}deg)`;
  toast(`Rotated ${WA_EDITOR_STATE.rotation}°`);
};

/* WhatsApp Music Picker & Search */
ACT.waEdMusic=()=>{
  sheet('🎵 '+(curLang()==='sw'?'Chagua Muziki wa Status':'Select Status Music'),`
    <div style="margin-bottom:.6rem">
      <input class="field" id="waMusicSearch" placeholder="${curLang()==='sw'?'Tafuta muziki au msanii...':'Search music or artist...'}" style="width:100%">
    </div>
    <div class="wa-music-list" id="waMusicList">
      ${renderWAMusicList(WA_BUILTIN_MUSIC)}
    </div>
    <div style="margin-top:.8rem;padding-top:.6rem;border-top:1px solid var(--line)">
      <button class="btn ghost grow" data-act="uploadCustomMusic" style="width:100%">
        📁 ${curLang()==='sw'?'Pakia Wimbo Wako (MP3/Audio kutoka Simu)':'Upload Custom MP3 / Audio from Device'}
      </button>
    </div>
  `);

  setTimeout(()=>{
    const search=$('#waMusicSearch');
    if(search){
      search.oninput=()=>{
        const q=search.value.toLowerCase().trim();
        const filtered=WA_BUILTIN_MUSIC.filter(m=>m.title.toLowerCase().includes(q)||m.artist.toLowerCase().includes(q)||m.genre.toLowerCase().includes(q));
        const list=$('#waMusicList');
        if(list)list.innerHTML=renderWAMusicList(filtered);
      };
    }
  },100);
};

function renderWAMusicList(tracks){
  if(!tracks.length)return`<div class="empty">${curLang()==='sw'?'Hakuna muziki uliopatikana':'No music found'}</div>`;
  return tracks.map(m=>`
    <div class="wa-music-item">
      <button class="wa-music-play-btn" data-act="previewMusicTrack" data-mid="${m.id}" aria-label="Play">${ic('play')}</button>
      <div class="grow" style="cursor:pointer" data-act="selectMusicTrack" data-mid="${m.id}">
        <b>${esc(m.title)}</b><br>
        <span class="muted small">${esc(m.artist)} · ${esc(m.genre)}</span>
      </div>
      <button class="btn sm" data-act="selectMusicTrack" data-mid="${m.id}">+ Add</button>
    </div>
  `).join('');
}

ACT.previewMusicTrack=el=>{
  const mid=el.dataset.mid,m=WA_BUILTIN_MUSIC.find(x=>x.id===mid);
  if(!m)return;
  if(WA_ACTIVE_MUSIC&&WA_ACTIVE_MUSIC.id===mid){
    stopWAMusic();el.innerHTML=ic('play');return;
  }
  document.querySelectorAll('.wa-music-play-btn').forEach(b=>{b.innerHTML=ic('play');});
  el.innerHTML=ic('pause');
  playWAMusic(m);
};

ACT.selectMusicTrack=el=>{
  const mid=el.dataset.mid,m=WA_BUILTIN_MUSIC.find(x=>x.id===mid);
  if(!m)return;
  WA_EDITOR_STATE.music=m;
  closeSheet();
  updateMusicBanner();
  playWAMusic(m);
  toast(curLang()==='sw'?'Wimbo umechaguliwa!':'Music added!');
};

ACT.uploadCustomMusic=async()=>{
  const f=await pickFile('audio/*');
  if(!f)return;
  try{
    const data=await fileToData(f);
    const customTrack={
      id:uid('msc'),
      title:f.name.replace(/\.[^/.]+$/,''),
      artist:'Custom Audio',
      genre:'User Track',
      customSrc:data
    };
    WA_EDITOR_STATE.music=customTrack;
    closeSheet();
    updateMusicBanner();
    playWAMusic(customTrack);
    toast(curLang()==='sw'?'Wimbo wako umepakiwa kikamilifu!':'Custom audio track added!');
  }catch(e){toast('Could not load audio.')}
};

function updateMusicBanner(){
  const wrap=$('#waMusicBannerWrap'),btn=$('#waEdMusicBtn');
  if(!wrap)return;
  if(WA_EDITOR_STATE.music){
    wrap.innerHTML=`<div class="wa-music-badge">
      <span class="wa-disc-spin">💿</span>
      <span>${esc(WA_EDITOR_STATE.music.title)}</span>
      <button style="background:none;border:none;color:#fff;cursor:pointer;font-weight:900;margin-left:.3rem" data-act="removeMusic">✕</button>
    </div>`;
    if(btn)btn.classList.add('active');
  }else{
    wrap.innerHTML='';
    if(btn)btn.classList.remove('active');
  }
}

ACT.removeMusic=()=>{
  WA_EDITOR_STATE.music=null;
  stopWAMusic();
  updateMusicBanner();
};

ACT.waEdToggleMute=()=>{
  const v=$('#waEdVidPreview'),btn=$('#waEdMuteBtn');
  WA_EDITOR_STATE.muted=!WA_EDITOR_STATE.muted;
  if(v)v.muted=WA_EDITOR_STATE.muted;
  if(btn){
    btn.innerHTML=WA_EDITOR_STATE.muted?ic('mute'):ic('volume');
    btn.classList.toggle('active',WA_EDITOR_STATE.muted);
  }
  toast(WA_EDITOR_STATE.muted?(curLang()==='sw'?'Sauti ya video imezimwa':'Original video muted'):(curLang()==='sw'?'Sauti ya video imewashwa':'Original video sound on'));
};

/* WhatsApp Drawing / Doodle Engine with Undo and Clear */
let DRAWING_ACTIVE=false,IS_DRAWING=false;
function initDoodleCanvas(){
  const canvas=$('#waDrawCanvas');if(!canvas)return;
  const stage=$('#waEdStage');
  canvas.width=stage?stage.clientWidth:360;
  canvas.height=stage?stage.clientHeight:500;
  const ctx=canvas.getContext('2d');
  ctx.strokeStyle=WA_EDITOR_STATE.drawColor||'#25d366';
  ctx.lineWidth=WA_EDITOR_STATE.drawSize||4;
  ctx.lineCap='round';ctx.lineJoin='round';

  canvas.onpointerdown=e=>{
    if(!DRAWING_ACTIVE)return;
    IS_DRAWING=true;
    // Save state for undo
    WA_EDITOR_STATE.doodleHistory.push(ctx.getImageData(0,0,canvas.width,canvas.height));
    const rect=canvas.getBoundingClientRect();
    ctx.strokeStyle=WA_EDITOR_STATE.drawColor;
    ctx.lineWidth=WA_EDITOR_STATE.drawSize;
    ctx.beginPath();
    ctx.moveTo(e.clientX-rect.left,e.clientY-rect.top);
  };
  canvas.onpointermove=e=>{
    if(!IS_DRAWING||!DRAWING_ACTIVE)return;
    const rect=canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX-rect.left,e.clientY-rect.top);
    ctx.stroke();
  };
  canvas.onpointerup=()=>{
    if(!IS_DRAWING)return;
    IS_DRAWING=false;
    WA_EDITOR_STATE.doodles.push(canvas.toDataURL());
  };
}

ACT.waEdDoodle=()=>{
  DRAWING_ACTIVE=!DRAWING_ACTIVE;
  const btn=$('#waEdDoodleBtn'),bar=$('#waDoodleBar'),can=$('#waDrawCanvas');
  if(btn)btn.classList.toggle('active',DRAWING_ACTIVE);
  if(bar)bar.classList.toggle('hidden',!DRAWING_ACTIVE);
  if(can)can.style.pointerEvents=DRAWING_ACTIVE?'auto':'none';
  toast(DRAWING_ACTIVE?(curLang()==='sw'?'Hali ya Kuchora imewashwa':'Drawing mode ON - draw with your finger'):(curLang()==='sw'?'Uchora umezimwa':'Drawing mode OFF'));
};

ACT.waSetDoodleColor=el=>{
  const c=el.dataset.col;
  WA_EDITOR_STATE.drawColor=c;
  document.querySelectorAll('.wa-color-dot').forEach(d=>d.classList.remove('active'));
  el.classList.add('active');
  const canvas=$('#waDrawCanvas');
  if(canvas){
    const ctx=canvas.getContext('2d');
    ctx.strokeStyle=c;
  }
};

ACT.waUndoDoodle=()=>{
  const canvas=$('#waDrawCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  if(WA_EDITOR_STATE.doodleHistory.length){
    const prev=WA_EDITOR_STATE.doodleHistory.pop();
    ctx.putImageData(prev,0,0);
  }else{
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
};

ACT.waClearDoodle=()=>{
  const canvas=$('#waDrawCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  WA_EDITOR_STATE.doodleHistory=[];
  WA_EDITOR_STATE.doodles=[];
};

/* WhatsApp Text Overlays (Draggable & Editable) */
ACT.waEdAddText=()=>{
  sheet(curLang()==='sw'?'Weka Maandishi kwenye Status':'Add Text Overlay',`
    <form class="form" data-form="waAddText">
      <label class="lab">${curLang()==='sw'?'Maandishi':'Text'}
        <input class="field" name="txt" required maxlength="60" placeholder="Hello Kilimo!">
      </label>
      <label class="lab">${curLang()==='sw'?'Mtindo wa Fonti':'Font Style'}
        <select class="field" name="font">
          <option value="var(--font-display)">Classic Bold</option>
          <option value="monospace">Neon Code</option>
          <option value="serif">Serif Elegant</option>
          <option value="cursive">Marker Handwriting</option>
        </select>
      </label>
      <label class="lab">${curLang()==='sw'?'Mtindo wa Kisanduku':'Background Badge'}
        <select class="field" name="bgStyle">
          <option value="solid">${curLang()==='sw'?'Kisanduku cheusi':'Dark box background'}</option>
          <option value="translucent">${curLang()==='sw'?'Uwazi kiasi (Translucent)':'Semi-transparent'}</option>
          <option value="none">${curLang()==='sw'?'Bila kisanduku (Maandishi pekee)':'No background (Text only)'}</option>
        </select>
      </label>
      <div class="row wrap" style="gap:.5rem;margin:.5rem 0">
        ${['#ffffff','#25d366','#facc15','#ef4444','#38bdf8','#c084fc','#000000'].map((col,i)=>`
          <label class="radio">
            <input type="radio" name="col" value="${col}" ${i===0?'checked':''}>
            <span style="width:1.6rem;height:1.6rem;border-radius:50%;background:${col};border:1px solid #666;display:inline-block"></span>
          </label>
        `).join('')}
      </div>
      <button class="btn">+ ${curLang()==='sw'?'Weka Maandishi':'Add Text'}</button>
    </form>
  `);
};

FORM.waAddText=f=>{
  const text=fv(f,'txt').trim();
  const font=fv(f,'font');
  const bgStyle=fv(f,'bgStyle');
  const col=(f.querySelector('input[name=col]:checked')||{value:'#ffffff'}).value;
  if(!text)return;
  closeSheet();
  const id=uid('tx');
  WA_EDITOR_STATE.textOverlays.push({id,text,col,font,bgStyle,x:50,y:40});
  renderStageOverlays();
  toast('Drag text to place anywhere!');
};

/* WhatsApp Sticker Overlays (Draggable) */
ACT.waEdAddSticker=()=>{
  sheet(curLang()==='sw'?'Chagua Kibandiko cha Status':'Pick Sticker for Status',`
    <div class="stickers-grid">
      ${['🌾','🌽','🐄','🚜','🌱','🍅','🥑','🐔','🐐','🔥','👍','❤️','😂','🎉','🌟','💯','✨','🍎','🥕','🌻','💧','🪴'].map(s=>`
        <button class="stk-btn" data-act="waPlaceSticker" data-s="${s}">${s}</button>
      `).join('')}
    </div>
  `);
};

ACT.waPlaceSticker=el=>{
  const s=el.dataset.s;if(!s)return;
  closeSheet();
  const id=uid('stk');
  WA_EDITOR_STATE.stickers.push({id,s,x:50,y:50});
  renderStageOverlays();
  toast('Drag sticker to place anywhere!');
};

function renderStageOverlays(){
  const wrap=$('#waStageOverlay');if(!wrap)return;
  wrap.innerHTML=`
    ${WA_EDITOR_STATE.textOverlays.map(t=>{
      const bgCss=t.bgStyle==='solid'?'background:rgba(0,0,0,.75);':t.bgStyle==='translucent'?'background:rgba(0,0,0,.4);backdrop-filter:blur(4px);':'background:transparent;';
      return`<div class="wa-overlay-text-item" id="ov_${t.id}" style="left:${t.x}%;top:${t.y}%;color:${t.col};font-family:${t.font||'inherit'};${bgCss}" data-act="waEditOverlayText" data-id="${t.id}">
        ${esc(t.text)}
        <span class="wa-overlay-del-btn" data-act="waDelText" data-id="${t.id}">✕</span>
      </div>`;
    }).join('')}
    ${WA_EDITOR_STATE.stickers.map(st=>`
      <div class="wa-overlay-sticker-item" id="ov_${st.id}" style="left:${st.x}%;top:${st.y}%">
        ${esc(st.s)}
        <span class="wa-overlay-del-btn" data-act="waDelSticker" data-id="${st.id}">✕</span>
      </div>
    `).join('')}
  `;

  // Attach interactive drag handles for both mouse & touch
  attachOverlayDraggers();
}

function attachOverlayDraggers(){
  const stage=$('#waEdStage');if(!stage)return;
  const items=document.querySelectorAll('.wa-overlay-text-item, .wa-overlay-sticker-item');
  items.forEach(el=>{
    let isDragging=false,startX,startY;
    el.onpointerdown=e=>{
      if(e.target.classList.contains('wa-overlay-del-btn'))return;
      isDragging=true;
      el.setPointerCapture(e.pointerId);
      const stageRect=stage.getBoundingClientRect();
      const onMove=ev=>{
        if(!isDragging)return;
        const xPct=((ev.clientX-stageRect.left)/stageRect.width)*100;
        const yPct=((ev.clientY-stageRect.top)/stageRect.height)*100;
        el.style.left=Math.max(5,Math.min(95,xPct))+'%';
        el.style.top=Math.max(5,Math.min(95,yPct))+'%';
        const id=el.id.replace('ov_','');
        const txtObj=WA_EDITOR_STATE.textOverlays.find(o=>o.id===id);
        if(txtObj){txtObj.x=xPct;txtObj.y=yPct}
        const stkObj=WA_EDITOR_STATE.stickers.find(o=>o.id===id);
        if(stkObj){stkObj.x=xPct;stkObj.y=yPct}
      };
      const onUp=()=>{
        isDragging=false;
        el.onpointermove=null;
        el.onpointerup=null;
      };
      el.onpointermove=onMove;
      el.onpointerup=onUp;
    };
  });
}

ACT.waDelText=el=>{
  const id=el.dataset.id;
  WA_EDITOR_STATE.textOverlays=WA_EDITOR_STATE.textOverlays.filter(x=>x.id!==id);
  renderStageOverlays();
};

ACT.waDelSticker=el=>{
  const id=el.dataset.id;
  WA_EDITOR_STATE.stickers=WA_EDITOR_STATE.stickers.filter(x=>x.id!==id);
  renderStageOverlays();
};

ACT.waEditOverlayText=el=>{
  const id=el.dataset.id;
  const item=WA_EDITOR_STATE.textOverlays.find(x=>x.id===id);
  if(!item)return;
  const newTxt=prompt(curLang()==='sw'?'Badili maandishi:':'Edit text:',item.text);
  if(newTxt!==null&&newTxt.trim()){
    item.text=newTxt.trim();
    renderStageOverlays();
  }
};

/* WhatsApp Publish / Send */
ACT.waEdSend=()=>{
  const capInput=$('#waCaptionInput');
  const caption=capInput?capInput.value.trim():'';
  const u=curUser();
  const sampleViewers=u.contacts.filter(c=>!c.ai&&!c.blocked).slice(0,3).map((c,i)=>({
    id:c.id,name:c.name,ts:now()-(i+1)*180000
  }));

  const canvas=$('#waDrawCanvas');
  const doodleData=(WA_EDITOR_STATE.doodles.length&&canvas)?canvas.toDataURL():null;

  u.statuses.push({
    id:uid('st'),
    by:'me',
    text:caption,
    media:WA_EDITOR_STATE.media,
    trimStart:WA_EDITOR_STATE.trimStart,
    trimEnd:WA_EDITOR_STATE.trimEnd,
    dur:WA_EDITOR_STATE.trimEnd-WA_EDITOR_STATE.trimStart,
    filter:WA_EDITOR_STATE.filter,
    rotation:WA_EDITOR_STATE.rotation,
    music:WA_EDITOR_STATE.music,
    muted:WA_EDITOR_STATE.muted,
    textOverlays:WA_EDITOR_STATE.textOverlays,
    stickers:WA_EDITOR_STATE.stickers,
    doodle:doodleData,
    img:WA_EDITOR_STATE.media&&WA_EDITOR_STATE.media.type==='image'?WA_EDITOR_STATE.media.src:null,
    views:sampleViewers,
    ts:now()
  });

  stopWAMusic();
  save();
  const overlay=$('#waEditorOverlay');if(overlay)overlay.remove();
  paintChatBody();
  toast(curLang()==='sw'?'Status ya WhatsApp imechapishwa kikamilifu!':'WhatsApp Status posted successfully!');
};

/* WhatsApp Fullscreen Text Status Creator */
ACT.openWATextStatus=()=>{
  let curBg=0;
  sheet(curLang()==='sw'?'Status ya Maandishi':'Text Status',`
    <form class="form" data-form="waTextStatus">
      <div id="waTextPreviewBox" style="min-height:160px;background:${BGS[0]};border-radius:14px;padding:1.4rem;display:grid;place-items:center;color:#fff;margin-bottom:1rem">
        <textarea class="field" name="text" id="waStatusTextInput" required maxlength="180" placeholder="${curLang()==='sw'?'Andika status yako hapa...':'Type a status...'}" style="background:transparent;border:none;color:#fff;font:800 1.3rem var(--font-display);text-align:center;width:100%;resize:none"></textarea>
      </div>
      <div class="row" style="justify-content:space-between">
        <button type="button" class="btn ghost sm" id="waCycleBgBtn" data-act="waCycleBg">🎨 ${curLang()==='sw'?'Badili Rangi':'Change Color'}</button>
        <button class="btn sm" style="background:#25d366;color:#0b141a">+ ${curLang()==='sw'?'Chapisha':'Publish'}</button>
      </div>
    </form>
  `);
};

let CURRENT_TEXT_BG=0;
ACT.waCycleBg=()=>{
  CURRENT_TEXT_BG=(CURRENT_TEXT_BG+1)%BGS.length;
  const box=$('#waTextPreviewBox');
  if(box)box.style.background=BGS[CURRENT_TEXT_BG];
};

FORM.waTextStatus=f=>{
  const text=fv(f,'text').trim();if(!text)return;
  const u=curUser();
  const sampleViewers=u.contacts.filter(c=>!c.ai&&!c.blocked).slice(0,3).map((c,i)=>({
    id:c.id,name:c.name,ts:now()-(i+1)*180000
  }));
  u.statuses.push({
    id:uid('st'),by:'me',text,bg:CURRENT_TEXT_BG,
    views:sampleViewers,ts:now()
  });
  save();closeSheet();paintChatBody();
  toast(curLang()==='sw'?'Status imechapishwa!':'Status posted!');
};

/* WhatsApp Fullscreen Status Viewer with Synchronized Music Playback */
let STATUS_TIMER=null,STATUS_PAUSED=false,STATUS_T0=0,STATUS_ELAPSED=0,STATUS_DURATION=5000;
ACT.viewStatus=el=>{
  const sid=el.dataset.id,u=curUser(),cut=now()-864e5;
  const allStat=u.statuses.filter(s=>s.ts>cut);
  const target=allStat.find(x=>x.id===sid);if(!target)return;
  const userStatuses=allStat.filter(s=>s.by===target.by);
  let curIdx=userStatuses.findIndex(s=>s.id===sid);if(curIdx<0)curIdx=0;

  const viewer=document.createElement('div');
  viewer.className='wa-status-viewer';viewer.id='waStatusViewer';

  function renderStatus(idx){
    curIdx=idx;clearTimeout(STATUS_TIMER);STATUS_PAUSED=false;STATUS_ELAPSED=0;
    stopWAMusic();
    const s=userStatuses[curIdx];if(!s){return closeViewer();}
    const isMe=s.by==='me',author=isMe?u:(contactOf(s.by)||{name:'Mkulima'});
    const durSec=s.media&&s.media.type==='video'?Math.min(30,s.dur||s.media.dur||10):5;
    STATUS_DURATION=durSec*1000;
    const bgCss=(s.media&&s.media.src)?'#080d0a':(BGS[s.bg||0]||'#1b4332');

    const filterCss=s.filter&&s.filter!=='none'?`filter:${s.filter};`:'';
    const rotCss=s.rotation?`transform:rotate(${s.rotation}deg);`:'';

    viewer.style.background=bgCss;
    viewer.innerHTML=`
      <div class="wa-status-progress">
        ${userStatuses.map((st,i)=>`<div class="wa-progress-segment"><div class="wa-progress-fill" id="waProg_${i}" style="width:${i<curIdx?'100%':'0%'}"></div></div>`).join('')}
      </div>
      <div class="wa-status-header">
        <div style="display:flex;align-items:center;gap:.6rem">
          ${av(author.name,'sm',colorOf(author.id||'me'))}
          <div>
            <b>${esc(author.name)}</b>
            ${s.music?`<br><span class="wa-music-badge" style="font-size:.65rem;padding:.15rem .45rem"><span class="wa-disc-spin">💿</span> ${esc(s.music.title)}</span>`:`<br><span class="muted small" style="color:rgba(255,255,255,.8)">${ago(s.ts)}</span>`}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:.4rem">
          ${s.music||(s.media&&s.media.type==='video')?`<button class="icon-btn" id="waViewerAudioToggle" aria-label="Toggle Audio" style="color:#fff">${ic('volume')}</button>`:''}
          ${isMe?`<button class="wa-delete-btn" data-act="deleteStatusItem" data-id="${s.id}">${ic('trash')} Delete</button>`:''}
          <button class="icon-btn" id="waStatusClose" aria-label="Close" style="color:#fff">${ic('x')}</button>
        </div>
      </div>
      <div class="wa-status-body" id="waStatusBody">
        ${s.media&&s.media.type==='video'&&safeSrc(s.media.src)?`<video id="waStatusVid" src="${safeSrc(s.media.src)}" autoplay playsinline ${s.muted?'muted':''} style="${filterCss}${rotCss}"></video>`:(s.media&&s.media.type==='image'&&safeSrc(s.media.src))||(s.img&&safeSrc(s.img))?`<img src="${safeSrc(s.media?s.media.src:s.img)}" alt="Status" style="${filterCss}${rotCss}">`:''}
        ${s.doodle?`<img src="${safeSrc(s.doodle)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none">`:''}
        ${(s.textOverlays||[]).map(t=>{
          const bg=t.bgStyle==='solid'?'background:rgba(0,0,0,.75);':t.bgStyle==='translucent'?'background:rgba(0,0,0,.4);backdrop-filter:blur(4px);':'background:transparent;';
          return`<div class="wa-overlay-text-item" style="position:absolute;left:${t.x}%;top:${t.y}%;color:${t.col};font-family:${t.font||'inherit'};${bg}z-index:4">${esc(t.text)}</div>`;
        }).join('')}
        ${(s.stickers||[]).map(st=>`<div class="wa-overlay-sticker-item" style="position:absolute;left:${st.x}%;top:${st.y}%;z-index:4">${esc(st.s)}</div>`).join('')}
        ${s.text?`<p style="${(s.media&&s.media.src)||s.img?'position:absolute;bottom:1.5rem;background:rgba(0,0,0,.68);padding:.6rem 1.2rem;border-radius:12px;font-size:1.1rem;z-index:5':''}">${esc(s.text)}</p>`:''}
      </div>
      <div class="wa-status-footer">
        ${isMe?`
          <div class="wa-views-pill" data-act="showStatusViews" data-id="${s.id}">
            👁 ${s.views?s.views.length:0} ${curLang()==='sw'?'Watazamaji':'Views'}
          </div>
          <button class="wa-delete-btn" data-act="deleteStatusItem" data-id="${s.id}">Delete</button>
        `:`
          <div class="grow" style="display:flex;flex-direction:column;gap:.4rem">
            <!-- WhatsApp Quick Reactions -->
            <div class="wa-status-rx-row">
              ${['😍','😂','😮','😢','🙏','👏','🔥','❤️'].map(rx=>`
                <button class="wa-status-rx-btn" data-act="sendStatusReaction" data-to="${s.by}" data-rx="${rx}">${rx}</button>
              `).join('')}
            </div>
            <div style="display:flex;gap:.5rem">
              <input class="field grow" id="waReplyInput" placeholder="${curLang()==='sw'?'Jibu status...':'Reply to status...'}" style="background:rgba(255,255,255,.15);border:none;color:#fff">
              <button class="btn sm" data-act="replyStatus" data-to="${s.by}">${ic('send')}</button>
            </div>
          </div>
        `}
      </div>
    `;

    // Start background music if status has music
    if(s.music){
      playWAMusic(s.music,true);
    }

    // Handle video trim start playback
    const vid=$('#waStatusVid');
    if(vid&&s.trimStart){
      vid.currentTime=s.trimStart;
      vid.ontimeupdate=()=>{
        if(s.trimEnd&&vid.currentTime>=s.trimEnd){
          vid.currentTime=s.trimStart||0;
        }
      };
    }

    const fillEl=$(`#waProg_${curIdx}`);STATUS_T0=Date.now();
    function tick(){
      if(STATUS_PAUSED)return;
      STATUS_ELAPSED=Date.now()-STATUS_T0;
      const pct=Math.min(100,(STATUS_ELAPSED/STATUS_DURATION)*100);
      if(fillEl)fillEl.style.width=pct+'%';
      if(STATUS_ELAPSED>=STATUS_DURATION){
        if(curIdx<userStatuses.length-1)renderStatus(curIdx+1);
        else closeViewer();
      }else{
        STATUS_TIMER=setTimeout(tick,50);
      }
    }
    tick();

    const body=$('#waStatusBody');
    if(body){
      body.onpointerdown=e=>{
        const rect=body.getBoundingClientRect(),xPct=(e.clientX-rect.left)/rect.width;
        STATUS_PAUSED=true;clearTimeout(STATUS_TIMER);
        if(vid)vid.pause();
        stopWAMusic();
        body.onpointerup=()=>{
          body.onpointerup=null;
          if(Date.now()-(STATUS_T0+STATUS_ELAPSED)<220){
            if(xPct<0.3&&curIdx>0)return renderStatus(curIdx-1);
            if(xPct>0.7&&curIdx<userStatuses.length-1)return renderStatus(curIdx+1);
          }
          STATUS_PAUSED=false;STATUS_T0=Date.now()-STATUS_ELAPSED;
          if(vid)vid.play().catch(()=>{});
          if(s.music)playWAMusic(s.music,true);
          tick();
        };
      };
    }

    const audioToggle=$('#waViewerAudioToggle');
    if(audioToggle){
      audioToggle.onclick=()=>{
        WA_MUSIC_MUTED=!WA_MUSIC_MUTED;
        if(vid)vid.muted=WA_MUSIC_MUTED;
        if(WA_MUSIC_MUTED)stopWAMusic();
        else if(s.music)playWAMusic(s.music,true);
        audioToggle.innerHTML=WA_MUSIC_MUTED?ic('mute'):ic('volume');
      };
    }
  }

  function closeViewer(){
    clearTimeout(STATUS_TIMER);
    stopWAMusic();
    viewer.remove();
  }
  viewer.onclick=e=>{if(e.target.closest('#waStatusClose'))closeViewer()};
  document.body.appendChild(viewer);
  renderStatus(curIdx);
};

ACT.sendStatusReaction=el=>{
  const to=el.dataset.to,rx=el.dataset.rx;
  ensureChat(to);
  sendMsg(to,`[Status Reaction: ${rx}]`);
  const v=$('#waStatusViewer');if(v)v.remove();
  toast(curLang()==='sw'?`Umetuma reaction ${rx}`:`Sent reaction ${rx}`);
};

ACT.showStatusViews=el=>{
  const sid=el.dataset.id,s=curUser().statuses.find(x=>x.id===sid);if(!s)return;
  const views=s.views||[];
  sheet(`${curLang()==='sw'?'Watazamaji wa Status':'Status Viewers'} (${views.length})`,`
    ${views.length?`<div class="list">${views.map(v=>`<div class="item">${av(v.name,'sm',colorOf(v.id||'c'))}<span class="grow"><b>${esc(v.name)}</b><br><span class="muted small">${ago(v.ts)}</span></span><span class="muted small">👁</span></div>`).join('')}</div>`:'<div class="empty">No views yet.</div>'}
  `);
};

ACT.deleteStatusItem=el=>{
  const sid=el.dataset.id;
  if(!confirm(curLang()==='sw'?'Futa sasisho hili la status?':'Delete this status update?'))return;
  const u=curUser();u.statuses=u.statuses.filter(x=>x.id!==sid);save();
  stopWAMusic();
  const v=$('#waStatusViewer');if(v)v.remove();
  closeSheet();paintChatBody();
  toast(curLang()==='sw'?'Status imefutwa kikamilifu':'Status deleted');
};

ACT.replyStatus=el=>{
  const to=el.dataset.to,inp=$('#waReplyInput'),txt=inp?inp.value.trim():'';if(!txt)return;
  ensureChat(to);sendMsg(to,`[Status Reply]: ${txt}`);
  stopWAMusic();
  const v=$('#waStatusViewer');if(v)v.remove();
  toast(curLang()==='sw'?'Jibu limetumwa':'Reply sent');
};

ACT.myStatusMenu=()=>sheet('My Status Options',`
  <div class="menu">
    <button data-act="viewStatus" data-id="${(curUser().statuses.find(s=>s.by==='me')||{}).id}">${ic('eye')} ${curLang()==='sw'?'Tazama status zangu':'View my status'}</button>
    <button data-act="openWAEditor">${ic('camera')} ${curLang()==='sw'?'Weka status mpya ya video/picha':'Add new video/photo status'}</button>
    <button data-act="openWATextStatus">${ic('pen')} ${curLang()==='sw'?'Weka status ya maandishi':'Add text status'}</button>
  </div>
`);

ACT.chOpen=el=>{S.cv='ch:'+el.dataset.id;paintChatBody()};ACT.chBack=()=>{S.cv=null;paintChatBody()};
ACT.chFollow=el=>{const c=curUser().channels.find(x=>x.id===el.dataset.id);if(c&&!c.mine){c.followed=!c.followed;save();paintChatBody()}};
ACT.chCreate=()=>sheet('New Channel',`<form class="form" data-form="channel"><label class="lab">Channel name<input class="field" name="name" required maxlength="40"></label><label class="lab">Description<input class="field" name="desc" maxlength="100"></label><button class="btn">Create channel</button></form>`);
FORM.channel=f=>{const u=curUser(),id=uid('ch');u.channels.unshift({id,name:fv(f,'name').trim(),desc:fv(f,'desc').trim(),followed:false,mine:true,posts:[]});save();closeSheet();S.cv='ch:'+id;paintChatBody()};
FORM.chpost=f=>{const c=curUser().channels.find(x=>x.id===f.dataset.id),tVal=fv(f,'t').trim();if(!c||!tVal)return;c.posts.push({id:uid('cp'),text:tVal,ts:now()});save();paintChatBody()};

/* ============ settings ============ */
VIEWS.settings=()=>{const s=ST(),pv=PRIV(),u=curUser();
  const sw=(k,v,l,src)=>`<label class="srow"><span>${l}</span><span class="sw"><input type="checkbox" role="switch" data-set="${k}" data-src="${src}" ${v?'checked':''}><i></i></span></label>`;
  return`<div class="view" style="max-width:640px"><h2 style="font:800 2rem var(--font-display);letter-spacing:-.02em">${t('st_title')}</h2>
  
  <h3 class="sgroup">${t('st_lang_group')}</h3>
  <div class="srow"><span>${t('st_lang_label')}</span><div style="display:flex;gap:.5rem;align-items:center"><select class="field" data-set="lang" data-src="st" aria-label="Language / Lugha">${SUPPORTED_LANGUAGES.map(l=>`<option value="${l.code}" ${s.lang===l.code?'selected':''}>${l.flag} ${l.native} (${l.name})</option>`).join('')}</select><button class="btn ghost sm" data-act="openLangPicker" style="white-space:nowrap">${ic('repeat')} ${curLang()==='sw'?'Chagua Lugha':'Select'}</button></div></div>

  <h3 class="sgroup">${t('st_screen')}</h3>${sw('dark',s.dark,t('st_dark_mode'),'st')}
  <div class="srow"><span>${t('st_font_format')}</span><select class="field" data-set="font" data-src="st" aria-label="Text font"><option value="sans" ${s.font==='sans'?'selected':''}>${t('st_font_sans')}</option><option value="serif" ${s.font==='serif'?'selected':''}>${t('st_font_serif')}</option><option value="mono" ${s.font==='mono'?'selected':''}>${t('st_font_mono')}</option></select></div>
  <div class="srow"><span>${t('st_text_size')}</span><select class="field" data-set="size" data-src="st" aria-label="Text size">${[80,90,100,110,125,150].map(n=>`<option value="${n}" ${s.size===n?'selected':''}>${n}%</option>`).join('')}</select></div>
  
  <h3 class="sgroup">${t('st_chat_theme')}</h3>${[['system',t('st_chat_system')],['dark',t('st_chat_dark')],['light',t('st_chat_light')]].map(([v,l])=>`<label class="radio"><input type="radio" name="ctheme" value="${v}" data-set="chatTheme" data-src="st" ${s.chatTheme===v?'checked':''}> ${l}</label>`).join('')}
  
  <h3 class="sgroup">${t('st_privacy')}</h3>${sw('shareInfo',pv.shareInfo,t('st_share_bio'),'priv')}${sw('allowProfile',pv.allowProfile,t('st_allow_profile'),'priv')}${sw('secure',pv.secure,t('st_secure_mode'),'priv')}${sw('autoDelBlocked',pv.autoDelBlocked,t('st_autodel_blocked'),'priv')}${sw('location',pv.location,t('st_location'),'priv')}
  
  <h3 class="sgroup">${t('st_permissions')}</h3>${sw('file',s.perm.file,t('st_perm_file'),'perm')}${sw('camera',s.perm.camera,t('st_perm_camera'),'perm')}${sw('mic',s.perm.mic,t('st_perm_mic'),'perm')}
  
  <h3 class="sgroup">${t('st_account')}</h3>${u?`<div class="srow"><span>${esc(u.name)}<br><span class="muted small">${esc(u.handle)}</span></span><button class="btn danger sm" data-act="logout">${ic('logout')} ${t('st_logout')}</button></div><div class="srow"><span class="grow">${t('delete_account')}</span><button class="btn danger sm" data-act="deleteAccount">${ic('trash')} ${t('delete_account')}</button></div>`:`<div class="srow"><span class="muted">Not logged in</span><button class="btn sm" data-act="go" data-v="account">${t('st_login')}</button></div>`}
  <p class="muted small" style="margin-top:1.2rem">${t('st_priv_note')}</p></div>`};

ACT.deleteAccount=()=>{if(!curUser())return;sheet(t('delete_account'),`<p class="note" style="margin-bottom:.8rem">${t('delete_account_note')}</p><form class="form" data-form="deleteAccount"><label class="lab">${t('delete_username')}<input class="field" name="username" required autocomplete="username"></label><label class="lab">${t('delete_email')}<input class="field" name="email" type="email" required autocomplete="email"></label><label class="lab">${t('delete_password')}<input class="field" name="password" type="password" required autocomplete="current-password"></label><button class="btn danger">${ic('trash')} ${t('delete_confirm')}</button></form>`)};
FORM.deleteAccount=async f=>{
  const u=curUser();if(!u)return;
  const username=fv(f,'username').trim().replace(/^@/,'').toLowerCase();
  const expectedUsername=String(u.handle||'').trim().replace(/^@/,'').toLowerCase();
  const email=fv(f,'email').trim().toLowerCase();
  const accountEmail=String(u.email||u.login||'').trim().toLowerCase();
  if(!accountEmail.includes('@'))return toast(t('delete_email_missing'));
  if(username!==expectedUsername||email!==accountEmail||await sha(u.salt+fv(f,'password'))!==u.hash)return toast(t('delete_verify_failed'));
  if(u.remoteId)try{await communicationsRequest('/me',{email,password:fv(f,'password')},'DELETE')}catch(e){return toast(e.message||t('verification_unavailable'))}

  const deletedPosts=new Set(DB.posts.filter(p=>p.by===u.id).map(p=>p.id));
  DB.posts=DB.posts.filter(p=>p.by!==u.id).map(p=>{
    p.comments=(p.comments||[]).filter(c=>c.by!==u.id);
    p.likedBy=(p.likedBy||[]).filter(id=>id!==u.id);
    if((u.reposts||[]).includes(p.id))p.reposts=Math.max(0,(p.reposts||0)-1);
    return p;
  });
  Object.values(DB.users).forEach(other=>{
    if(other.id===u.id)return;
    other.following=(other.following||[]).filter(id=>id!==u.id);
    other.liked=(other.liked||[]).filter(id=>!deletedPosts.has(id));
    other.saved=(other.saved||[]).filter(id=>!deletedPosts.has(id));
    other.reposts=(other.reposts||[]).filter(id=>!deletedPosts.has(id));
    other.statuses=(other.statuses||[]).filter(status=>status.by!==u.id);
    if(other.chats)delete other.chats[u.id];
  });
  delete DB.users[u.id];DB.session=null;save();closeSheet();S.thread=null;go('account',{auth:'login'});toast(t('delete_account_success'));
};

async function setPref(tEl){const k=tEl.dataset.set,src=tEl.dataset.src,val=tEl.type==='checkbox'?tEl.checked:tEl.type==='radio'?tEl.value:tEl.tagName==='SELECT'&&k==='size'?+tEl.value:tEl.value;
  if(src==='perm'){if(val&&(k==='camera'||k==='mic')&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){try{const s=await navigator.mediaDevices.getUserMedia(k==='camera'?{video:true}:{audio:true});s.getTracks().forEach(x=>x.stop())}catch(e){tEl.checked=false;return toast('Browser denied permission.')}}DB.settings.perm[k]=val}
  else if(src==='priv')PRIV()[k]=val;else DB.settings[k]=val;
  save();if(src==='st'||k==='lang')render()}

/* ============ admin panel ============ */
let ADMIN_TAB='experts', ADMIN_FILTER='Pending_Verification', ADMIN_USERS=[], ADMIN_EXPERTS=[], ADMIN_STATS={};

async function loadAdminData(){
  try{
    const [statsRes,expertRes,usersRes]=await Promise.all([
      communicationsRequest('/admin/stats',null,'GET').catch(()=>({})),
      communicationsRequest(`/admin/experts?status=${encodeURIComponent(ADMIN_FILTER)}`,null,'GET').catch(()=>({experts:[]})),
      communicationsRequest('/admin/users',null,'GET').catch(()=>({users:[]}))
    ]);
    ADMIN_STATS=statsRes||{};
    ADMIN_EXPERTS=(expertRes.experts||[]);
    ADMIN_USERS=(usersRes.users||[]);
  }catch(e){toast('Could not load admin data: '+e.message);}
  render();
}

function adminHTML(){
  const u=curUser();
  if(!u||u.role!=='admin')return`<div class="view"><div class="empty">🔒 Unauthorized. Admin access only.</div></div>`;
  const isSw=curLang()==='sw';
  const stats=ADMIN_STATS;

  // KPI cards
  const kpi=`<div class="admin-kpi-grid">
    <div class="admin-kpi-card"><b>${stats.total_users||0}</b><span>${isSw?'Watumiaji Wote':'Total Users'}</span></div>
    <div class="admin-kpi-card pending"><b>${stats.pending_experts||0}</b><span>${isSw?'Wanasubiri Uhakiki':'Pending Verification'}</span></div>
    <div class="admin-kpi-card approved"><b>${stats.approved_experts||0}</b><span>${isSw?'Wataalamu Walioidhinishwa':'Approved Experts'}</span></div>
    <div class="admin-kpi-card"><b>${stats.rejected_experts||0}</b><span>${isSw?'Waliokuwa Wamekataliwa':'Rejected'}</span></div>
    <div class="admin-kpi-card"><b>${stats.total_messages||0}</b><span>${isSw?'Jumbe Zote':'Total Messages'}</span></div>
  </div>`;

  // Tab buttons
  const tabs=`<div class="admin-filter-bar" style="margin-bottom:.4rem">
    <button class="admin-filter-btn${ADMIN_TAB==='experts'?' active':''}" data-act="adminTab" data-t="experts">🌾 ${isSw?'Wataalamu':'Experts'}</button>
    <button class="admin-filter-btn${ADMIN_TAB==='users'?' active':''}" data-act="adminTab" data-t="users">👥 ${isSw?'Watumiaji':'All Users'}</button>
    <button class="admin-filter-btn${ADMIN_TAB==='content'?' active':''}" data-act="adminTab" data-t="content">📝 ${isSw?'Maudhui':'Content'}</button>
  </div>`;

  let body='';

  if(ADMIN_TAB==='experts'){
    // Filter pills
    const filters=[['Pending_Verification',`⏳ ${isSw?'Wanasubiri':'Pending'}`],['Approved',`✅ ${isSw?'Walioidhinishwa':'Approved'}`],['Rejected',`❌ ${isSw?'Waliokuwa Wamekataliwa':'Rejected'}`],['all',`🌐 ${isSw?'Wote':'All'}`]];
    const filterBar=`<div class="admin-filter-bar">${filters.map(([v,l])=>`<button class="admin-filter-btn${ADMIN_FILTER===v?' active':''}" data-act="adminFilter" data-f="${v}">${l}</button>`).join('')}</div>`;

    if(!ADMIN_EXPERTS.length){
      body=filterBar+`<div class="empty" style="margin-top:1.5rem">${isSw?'Hakuna wataalamu katika hali hii.':'No experts found in this status category.'}</div>`;
    } else {
      const expertCards=ADMIN_EXPERTS.map(ex=>{
        const statusColor=ex.status==='Approved'?'#22c55e':ex.status==='Rejected'?'#ef4444':'#eab308';
        const statusLabel=ex.status==='Approved'?(isSw?'Imeidhinishwa':'Approved'):ex.status==='Rejected'?(isSw?'Imekataliwa':'Rejected'):(isSw?'Inasubiri Uhakiki':'Pending Verification');
        return`<div class="admin-expert-card">
          <div class="admin-expert-head">
            <div style="display:flex;align-items:center;gap:.7rem">
              ${av(ex.name,'',colorOf(ex.id))}
              <div>
                <b>${esc(ex.name)}</b><br>
                <span class="muted small">${esc(ex.email||'')} ${ex.phone?'· '+esc(ex.phone):''}</span>
              </div>
            </div>
            <span style="padding:.3rem .8rem;border-radius:999px;font-size:.78rem;font-weight:800;background:${statusColor}20;color:${statusColor};border:1px solid ${statusColor}">${statusLabel}</span>
          </div>
          <div class="admin-expert-meta">
            <div><span class="muted small">${isSw?'Aina ya Mtaalamu':'Expert Type'}</span><br><b>${esc(roleLabel(ex.role||''))}</b></div>
            <div><span class="muted small">${isSw?'Kiwango cha Elimu':'Education'}</span><br><b>${esc(ex.education_level||'-')}</b></div>
            <div><span class="muted small">${isSw?'Chuo':'College/University'}</span><br><b>${esc(ex.college_name||'-')}</b></div>
            <div><span class="muted small">${isSw?'Nambari ya Usajili (VCT)':'Reg. Number (VCT)'}</span><br><b style="color:#facc15">${esc(ex.reg_number||'-')}</b></div>
            <div><span class="muted small">${isSw?'Jina la NIDA':'NIDA Name'}</span><br><b>${esc(ex.nida_name||'-')}</b></div>
            <div><span class="muted small">${isSw?'Leseni Inaisha':'License Expiry'}</span><br><b>${esc(ex.license_expiry||'-')}</b></div>
          </div>
          <div class="admin-doc-grid">
            ${ex.cert_doc?`<button class="admin-doc-thumb" data-act="adminPreviewDoc" data-doc="${esc(ex.id)}" data-type="cert">📄 ${isSw?'Cheti cha Taaluma':'Academic Certificate'}</button>`:`<span class="muted small">📄 ${isSw?'Hakuna cheti':'No certificate uploaded'}</span>`}
            ${ex.license_doc?`<button class="admin-doc-thumb" data-act="adminPreviewDoc" data-doc="${esc(ex.id)}" data-type="license">📜 ${isSw?'Leseni ya Kazi':'Practicing License'}</button>`:`<span class="muted small">📜 ${isSw?'Hakuna leseni':'No license uploaded'}</span>`}
          </div>
          ${ex.rejection_reason?`<div style="padding:.5rem .7rem;border-radius:8px;background:rgba(239,68,68,.08);border:1px solid #ef4444;font-size:.82rem;color:#f87171"><b>${isSw?'Sababu ya Kukataliwa':'Rejection Reason'}:</b> ${esc(ex.rejection_reason)}</div>`:''}
          <div class="admin-actions-row">
            ${ex.status!=='Approved'?`<button class="btn sm" data-act="adminApproveExpert" data-id="${esc(ex.id)}" style="background:#22c55e;color:#fff">✅ ${isSw?'Idhinisha':'Approve'}</button>`:''}
            ${ex.status!=='Rejected'?`<button class="btn sm" data-act="adminRejectExpert" data-id="${esc(ex.id)}" style="background:#ef4444;color:#fff">❌ ${isSw?'Kataa':'Reject'}</button>`:''}
            <button class="btn ghost sm" data-act="adminDeleteUser" data-id="${esc(ex.id)}">🗑️ ${isSw?'Futa Akaunti':'Delete Account'}</button>
          </div>
        </div>`;
      }).join('');
      body=filterBar+`<div class="admin-card-list">${expertCards}</div>`;
    }
  } else if(ADMIN_TAB==='users'){
    if(!ADMIN_USERS.length){
      body=`<div class="empty">${isSw?'Hakuna watumiaji.':'No users found.'}</div>`;
    } else {
      body=`<div class="admin-card-list">${ADMIN_USERS.map(usr=>`<div class="admin-expert-card" style="flex-direction:row;align-items:center;gap:1rem;flex-wrap:wrap">
        ${av(usr.name,'',colorOf(usr.id))}
        <div style="flex:1;min-width:0">
          <b>${esc(usr.name)}</b><span class="pill" style="margin-left:.4rem;font-size:.7rem">${esc(usr.role||'farmer')}</span><br>
          <span class="muted small">${esc(usr.email||'')} ${usr.phone?'· '+esc(usr.phone):''}</span>
        </div>
        <span style="font-size:.78rem;padding:.2rem .6rem;border-radius:999px;border:1px solid var(--line)">${esc(usr.status||'Approved')}</span>
        ${usr.id!=='admin_root'?`<button class="btn ghost sm" data-act="adminDeleteUser" data-id="${esc(usr.id)}" style="color:#ef4444">🗑️</button>`:'<span class="muted small">Root</span>'}
      </div>`).join('')}</div>`;
    }
  } else {
    // Content moderation tab
    const posts=DB.posts.slice().sort((a,b)=>b.ts-a.ts).slice(0,50);
    if(!posts.length){
      body=`<div class="empty">${isSw?'Hakuna maudhui.':'No posts to moderate.'}</div>`;
    } else {
      body=`<div class="admin-card-list">${posts.map(p=>`<div class="admin-expert-card" style="flex-direction:row;align-items:center;gap:.8rem;flex-wrap:wrap">
        <div style="flex:1;min-width:0">
          <b>${esc((DB.users[p.by]&&DB.users[p.by].name)||'Unknown')}</b>
          <span class="muted small" style="margin-left:.4rem">${new Date(p.ts*1e3).toLocaleDateString()}</span><br>
          <span class="small muted">${esc((p.text||'').slice(0,100))}${p.text&&p.text.length>100?'…':''}</span>
        </div>
        ${p.img?`<img src="${p.img}" style="width:48px;height:48px;border-radius:.4rem;object-fit:cover;flex-shrink:0" alt="">`:''}
        <button class="btn ghost sm" data-act="adminDeletePost" data-id="${esc(p.id)}" style="color:#ef4444">🗑️ ${isSw?'Futa':'Delete'}</button>
      </div>`).join('')}</div>`;
    }
  }

  return`<div class="admin-panel">
    <div class="admin-header">
      <h2>🛡️ ${isSw?'Jopo la Utawala':'Admin Control Center'}</h2>
      <div style="display:flex;gap:.6rem;align-items:center">
        <button class="btn sm" data-act="adminRefresh" style="background:var(--surface);color:var(--text);border:1px solid var(--line)">${ic('refresh')||'↻'} ${isSw?'Onyesha Upya':'Refresh'}</button>
        <button class="btn ghost sm" data-act="go" data-v="account">${ic('user')} ${isSw?'Akaunti Yangu':'My Account'}</button>
      </div>
    </div>
    ${kpi}
    ${tabs}
    ${body}
  </div>`;
}

VIEWS.admin=()=>adminHTML();
POST.admin=()=>loadAdminData();

ACT.goAdmin=()=>{closeSheet();go('admin')};
ACT.adminTab=el=>{ADMIN_TAB=el.dataset.t;render()};
ACT.adminFilter=async el=>{ADMIN_FILTER=el.dataset.f;await loadAdminData()};
ACT.adminRefresh=async()=>{await loadAdminData();toast('Data refreshed.')};

ACT.adminApproveExpert=async el=>{
  const id=el.dataset.id;
  if(!id)return;
  try{
    await communicationsRequest(`/admin/experts/${id}/status`,{status:'Approved',reason:''},'POST');
    toast(curLang()==='sw'?'Mtaalamu ameidhinishwa!':'Expert approved successfully!');
    // Update local cache
    const ex=ADMIN_EXPERTS.find(e=>e.id===id);if(ex)ex.status='Approved';
    await loadAdminData();
  }catch(e){toast('Error: '+e.message);}
};

ACT.adminRejectExpert=async el=>{
  const id=el.dataset.id,isSw=curLang()==='sw';
  if(!id)return;
  const reason=prompt(isSw?'Tafadhali weka sababu ya kukataliwa:':'Please enter the rejection reason:','');
  if(reason===null)return; // cancelled
  try{
    await communicationsRequest(`/admin/experts/${id}/status`,{status:'Rejected',reason:reason||''},'POST');
    toast(isSw?'Akaunti imekataliwa.':'Expert application rejected.');
    const ex=ADMIN_EXPERTS.find(e=>e.id===id);if(ex){ex.status='Rejected';ex.rejection_reason=reason;}
    await loadAdminData();
  }catch(e){toast('Error: '+e.message);}
};

ACT.adminDeleteUser=async el=>{
  const id=el.dataset.id,isSw=curLang()==='sw';
  if(!id)return;
  if(!confirm(isSw?'Je, una uhakika kutaka kufuta akaunti hii? Hatua hii haiwezi kutenduliwa.':'Are you sure you want to delete this account? This cannot be undone.'))return;
  try{
    await communicationsRequest(`/admin/users/${id}`,null,'DELETE');
    toast(isSw?'Akaunti imefutwa.':'Account deleted.');
    ADMIN_USERS=ADMIN_USERS.filter(u=>u.id!==id);
    ADMIN_EXPERTS=ADMIN_EXPERTS.filter(e=>e.id!==id);
    render();
  }catch(e){toast('Error: '+e.message);}
};

ACT.adminDeletePost=el=>{
  const id=el.dataset.id,isSw=curLang()==='sw';
  if(!id)return;
  if(!confirm(isSw?'Je, una uhakika kutaka kufuta chapisho hili?':'Delete this post? This cannot be undone.'))return;
  DB.posts=DB.posts.filter(p=>p.id!==id);save();toast(isSw?'Chapisho limefutwa.':'Post deleted.');render();
};

ACT.adminPreviewDoc=async el=>{
  const userId=el.dataset.doc,type=el.dataset.type,isSw=curLang()==='sw';
  const expert=ADMIN_EXPERTS.find(e=>e.id===userId);
  if(!expert)return toast('Expert not found in loaded data.');
  const docData=type==='cert'?expert.cert_doc:expert.license_doc;
  const docLabel=type==='cert'?(isSw?'Cheti cha Taaluma':'Academic Certificate'):(isSw?'Leseni ya Kazi':'Practicing License');
  if(!docData)return toast(isSw?'Hakuna hati iliyopakiwa.':'No document was uploaded.');
  if(docData.startsWith('data:image/')){
    sheet(docLabel,`<div style="text-align:center"><img src="${docData}" style="max-width:100%;max-height:70vh;border-radius:12px;border:1px solid var(--line)" alt="${docLabel}"></div>`);
  } else if(docData.startsWith('data:application/pdf')){
    sheet(docLabel,`<div style="text-align:center"><iframe src="${docData}" style="width:100%;height:70vh;border:none;border-radius:8px"></iframe></div>`);
  } else {
    sheet(docLabel,`<div class="empty">${isSw?'Muundo wa hati haukutambuliwa. Tafadhali angalia':'Unsupported document format. Try downloading it.'}</div>`);
  }
};

/* ============ about ============ */
VIEWS.about=()=>`<div class="view about" style="max-width:720px"><h2>${t('about_title')}</h2>
  <p>${t('about_desc')}</p>
  <h3>${t('about_goal_title')}</h3><ul><li>${t('about_goal_1')}</li><li>${t('about_goal_2')}</li><li>${t('about_goal_3')}</li><li>${t('about_goal_4')}</li></ul>
  <h3>${t('about_dev_title')}</h3><p>${t('about_dev_desc')}</p>
  <p class="muted">${t('about_services')}</p>
  <p class="note" style="margin-top:1.4rem">${t('about_version')}</p></div>`;

/* ============ terms & policies ============ */
VIEWS.terms=()=>{
  const isSw=curLang()==='sw';
  return`<div class="view terms-view">
    <div class="row" style="margin-bottom:1.2rem;justify-content:space-between;align-items:center">
      <button class="icon-btn" data-act="go" data-v="account" aria-label="${t('back_home')}">${ic('back')}</button>
      <span class="badge" style="background:var(--lime);color:#12200a;font-weight:800;padding:.3rem .7rem;font-size:.78rem">${isSw?'Sera &amp; Kanuni Rasmi':'Official Policies'}</span>
    </div>

    <h1 style="font:800 clamp(1.8rem,6vw,2.5rem)/1.1 var(--font-display);letter-spacing:-.02em;margin-bottom:.4rem">
      ${isSw?'Vigezo na Masharti ya MIMI NI MKULIMA':'MIMI NI MKULIMA Terms &amp; Conditions'}
    </h1>
    <p class="muted" style="margin-bottom:1.5rem">
      ${isSw?'Mwongozo kamili wa kubadilisha jina la akaunti, vigezo vya lazima, usalama wa barua pepe, na kanuni za jamii ya wakulima na wafugaji.':'Complete guidelines on changing usernames, mandatory criteria, email verification, and community standards.'}
    </p>

    <div class="terms-card" style="border-left:4px solid var(--acc)">
      <h3>${ic('user')} ${isSw?'1. Vigezo vya Kubadilisha Jina la Mtumiaji (Username Change Policy)':'1. Requirements for Changing Username'}</h3>
      <p>${isSw?'Ili kuhakikisha usalama, kuaminiana na kuzuia vitendo vya udanganyifu au akaunti feki miongoni mwa wanajamii, mfumo wa MIMI NI MKULIMA unaweka vigezo vifuatavyo ambavyo ni lazima vitimie kabla ya kuruhusu mabadiliko ya jina:':'To guarantee safety, mutual trust, and prevent impersonation across our community, MIMI NI MKULIMA enforces the following mandatory criteria before permitting a username change:'}</p>
      
      <ul>
        <li>
          <span class="terms-rule-badge">⏳ ${isSw?'Kigezo cha 1: Umri wa Akaunti (Miezi 6)':'Criterion 1: Account Age (6 Months)'}</span><br>
          <b>${isSw?'Akaunti lazima iwe imekaa angalau miezi 6 (siku 180) tangu kusajiliwa:':'Account must be at least 6 months (180 days) old since registration:'}</b>
          ${isSw?'Akaunti mpya haziruhusiwi kubadilisha jina mara moja. Hii inasaidia kuzuia watu wanaofungua akaunti za muda mfupi kwa nia ya utapeli wa kibiashara au kukwepa wajibu.':'New accounts cannot change usernames immediately. This eliminates throwaway accounts used for commercial deception.'}
        </li>
        <li>
          <span class="terms-rule-badge">⚡ ${isSw?'Kigezo cha 2: Utendaji Mfululizo (Wiki 2)':'Criterion 2: Consecutive Activity (2 Weeks)'}</span><br>
          <b>${isSw?'Akaunti inapaswa kuwa hai na kutumika kwa angalau wiki mbili (siku 14) mfululizo kabla ya kuomba:':'Account must be actively used for at least two consecutive weeks (14 days) prior to request:'}</b>
          ${isSw?'Mtumiaji anapaswa kuwa na rekodi ya utendaji wa kila siku kwenye app (kuingia, kusoma makala, kuwasiliana au kuchapisha maudhui) kwa siku 14 mfululizo bila kukosa ili kuthibitisha kuwa akaunti inatumiwa na binadamu halisi.':'The member must demonstrate steady activity within the application (logging in, consulting guides, messaging, or posting) across 14 consecutive days.'}
        </li>
        <li>
          <span class="terms-rule-badge">🔒 ${isSw?'Kigezo cha 3: Muda wa Subira (Miezi 2)':'Criterion 3: Cooldown Period (2 Months)'}</span><br>
          <b>${isSw?'Huwezi kubadilisha tena jina hadi miezi miwili (siku 60) ipite:':'No further changes permitted until 2 months (60 days) have elapsed:'}</b>
          ${isSw?'Ukifanikiwa kubadilisha jina la akaunti, mfumo utafunga uwezo wa kubadilisha tena hadi siku 60 zitimie. Hii inalinda wateja na wafugaji/wakulima wanaofanya biashara na wewe wasipoteze mawasiliano na utambulisho wako.':'Once altered, the system locks username changes for 60 days so trading partners, farmers, and extension officers do not lose track of your identity.'}
        </li>
        <li>
          <span class="terms-rule-badge">✉️ ${isSw?'Kigezo cha 4: Uhakiki Salama wa Barua Pepe (Brevo API)':'Criterion 4: Secure Email Verification (Brevo API)'}</span><br>
          <b>${isSw?'Uthibitisho wa Nambari ya Siri (OTP) kupitia Barua Pepe:':'One-Time Verification Code (OTP) via Registered Email:'}</b>
          ${isSw?'Pindi vigezo vyote vinapokamilika, mfumo utatuma nambari ya siri ya tarakimu 6 kwenye barua pepe uliyosajilia kupitia mfumo wetu salama wa Brevo ili kuhakikisha ni wewe mwenyewe mwenye akaunti unayefanya mabadiliko hayo.':'When all criteria are satisfied, a secure 6-digit verification code is delivered to your registered email via Brevo to verify that the change is legitimately authorized by you.'}
        </li>
      </ul>
    </div>

    <div class="terms-card">
      <h3>${ic('leaf')} ${isSw?'2. Kanuni za Wataalamu na Ushauri wa Kilimo na Mifugo':'2. Guidelines for Agricultural &amp; Veterinary Specialists'}</h3>
      <p>${isSw?'Wataalamu wote wa mazao (Crop Experts) na mifugo (Livestock Experts) wanapaswa kutoa ushauri wenye weledi na ushahidi wa kisayansi. Matumizi ya simu za video na sauti ndani ya app yapo kwa ajili ya kusaidia wakulima na kutatua changamoto halisi za shambani.':'All Crop Experts and Livestock Experts must uphold professional ethics and provide sound agricultural and veterinary guidance. In-app audio and video calls are intended for resolving genuine field and barn challenges.'}</p>
    </div>

    <div class="terms-card">
      <h3>${ic('tag')} ${isSw?'3. Masharti ya Soko la Mazao na Mifugo (Marketplace)':'3. Marketplace &amp; Trade Terms'}</h3>
      <p>${isSw?'Wakulima na wafugaji wanapaswa kuweka bei halisi za Kitanzania (TZS), maelezo sahihi ya wingi au idadi, na eneo halisi la shamba. Bidhaa bandia, mbegu zilizopitwa na wakati au madawa yasiyoidhinishwa ni marufuku kabisa.':'Sellers must list accurate pricing in Tanzanian Shillings (TZS), truthful quantities, and real farm locations. Counterfeit produce, expired seeds, or unapproved agrochemicals are strictly prohibited.'}</p>
    </div>

    <div class="terms-card">
      <h3>${ic('lock')} ${isSw?'4. Usalama na Faragha ya Akaunti':'4. Account Security &amp; Privacy'}</h3>
      <p>${isSw?'MIMI NI MKULIMA haitawahi kukuomba nenosiri lako au nambari yako ya uhakiki ya barua pepe. Tunza taarifa zako kwa siri. Ikiwa unaona shughuli yoyote isiyo ya kawaida, badilisha nenosiri lako mara moja kwa kutumia kiungo cha Forgot Password.':'MIMI NI MKULIMA will never ask for your password or verification codes. Keep your login credentials confidential. If you detect suspicious activity, reset your password immediately.'}</p>
    </div>

    <div style="text-align:center;margin:2rem 0">
      <button class="btn" data-act="go" data-v="account">${ic('user')} ${isSw?'Rudi kwenye Akaunti Yangu':'Return to My Account'}</button>
    </div>
  </div>`;
};

/* ============ events ============ */
document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el)return;const f=ACT[el.dataset.act];if(f)f(el,e)});
const _go=ACT.go;ACT.go=el=>{if(el.dataset.v==='chat')S.thread=null;_go(el)};
document.addEventListener('submit',e=>{const f=e.target.closest('form[data-form]');if(!f)return;e.preventDefault();const h=FORM[f.dataset.form];if(h)h(f)});
document.addEventListener('change',e=>{const tEl=e.target;if(tEl.dataset&&tEl.dataset.set)setPref(tEl)});
document.addEventListener('input',e=>{const tEl=e.target;
  if(tEl.tagName==='TEXTAREA'&&(tEl.id==='aiText'||tEl.id==='msgText')){tEl.style.height='auto';tEl.style.height=Math.min(tEl.scrollHeight,140)+'px'}
  if(tEl.id==='msgText'){const has=!!tEl.value.trim(),send=$('#sendBtn'),mic=$('#micBtn');if(send)send.classList.toggle('hidden',!has);if(mic)mic.classList.toggle('hidden',has)}
  if(tEl.id==='cq'){S.cq=tEl.value;$('#clist').innerHTML=chatList()}
  if(tEl.id==='chq'){S.chq=tEl.value;$('#chlist').innerHTML=chList(tEl.value.toLowerCase())}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();return}
  if(e.key==='Enter'&&!e.shiftKey&&e.target.tagName==='TEXTAREA'){if(e.target.id==='aiText'){e.preventDefault();aiSend()}else if(e.target.id==='msgText'){e.preventDefault();ACT.thSend()}}});
if(/^#post=/.test(location.hash)){S.stream.focus=decodeURIComponent(location.hash.slice(6));S.view='stream'}

render();
restoreCommunicationSession();
})();
