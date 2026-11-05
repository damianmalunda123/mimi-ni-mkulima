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
    expert_note: 'Contact an agricultural or veterinary specialist by phone. The call will open directly on your device.',
    btn_call: 'Call',
    open_ai_assistant: 'Open MIMI Assistant',
    also_chat_ai: 'You can also chat with our AI assistant:',
    ai_history: 'History',
    ai_new_chat: 'New conversation',
    ai_assistant_name: 'MIMI ASSISTANT',
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
    lbl_id: 'Phone or email',
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
    auth_note: 'Accounts are stored on this device. Password reset is available in the browser where the account is stored.',
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
    expert_note: 'Wasiliana na mtaalamu kwa kupiga simu. Simu itafunguliwa moja kwa moja kwenye kifaa chako.',
    btn_call: 'Piga simu',
    open_ai_assistant: 'Fungua MIMI Assistant',
    also_chat_ai: 'Unaweza pia kuzungumza na msaidizi wetu wa AI:',
    ai_history: 'Historia',
    ai_new_chat: 'Mazungumzo mapya',
    ai_assistant_name: 'MIMI NI MSAIDIZI',
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
    lbl_id: 'Simu au barua pepe',
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
    auth_note: 'Akaunti huhifadhiwa kwenye kifaa hiki. Kubadili nenosiri kunapatikana kwenye kivinjari chenye akaunti hiyo.',
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
  }
};

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
const safeSrc=s=>typeof s==='string'&&/^(data:image\/|data:audio\/|data:video\/|blob:)/.test(s)?s:'';
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
const EXPERTS=[
 {id:'vet',name:'Dr. J. Mwangi (Veterinarian)',role:'Livestock Health, Disease Diagnosis & Vaccination',kind:'ufugaji',phone:'+255749763095',displayPhone:'+255 749 763 095'},
 {id:'extension',name:'Bwana Shamba D. Kilawe',role:'Crop Agronomy, Soil Health & Pest Control',kind:'kilimo',phone:'+255796236053',displayPhone:'+255 796 236 053'}
];
const SEED_CONTACTS=[
 {id:'ai',name:'Agro AI',role:'AI Agricultural & Livestock Advisor',ai:true,online:true}
];
const SEED_CHANNELS=[
 {id:'ch1',name:'Daily Farming Tips',desc:'Actionable field advice and seasonal techniques.',posts:[{id:'a1',text:'Prepare fields ahead of rains to plant during the primary moisture window.',ago:86400e3},{id:'a2',text:'Use certified seeds suited to your regional altitude.',ago:2*86400e3}]},
 {id:'ch2',name:'Livestock Best Practices',desc:'Animal nutrition, housing ventilation, and wellness.',posts:[{id:'b1',text:'Sanitize livestock water troughs daily to prevent waterborne contamination.',ago:86400e3}]}
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
    const aiChat=(u.chats||{}).ai;if(aiChat){aiChat.name='Agro AI';const welcome=aiChat.msgs&&aiChat.msgs[0];if(welcome&&welcome.from==='ai'&&typeof welcome.text==='string')welcome.text=welcome.text.replace('MIMI Assistant','Agro AI')}
    u.statuses=(u.statuses||[]).filter(s=>!RETIRED_DEMO_CONTACTS.has(s.by));
    u.following=(u.following||[]).filter(id=>!RETIRED_SEED_USERS.has(id));
    u.reposts=(u.reposts||[]).filter(id=>d.posts.some(p=>p.id===id));
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
    channels:SEED_CHANNELS.map(c=>({id:c.id,name:c.name,desc:c.desc,followed:false,mine:false,posts:c.posts.map(p=>({id:p.id,text:p.text,ts:now()-p.ago}))})),
    communities:SEED_COMM.map(c=>({...c,joined:false})),
    statuses:[]});
  u.chats.ai={id:'ai',type:'dm',name:'Agro AI',unread:0,msgs:[{id:uid('m'),from:'ai',kind:'text',text:curLang()==='en'?'Welcome! I am Agro AI. Ask me any question about farming or livestock.':'Karibu! Mimi ni Agro AI. Niulize chochote kuhusu kilimo au ufugaji.',ts:now()}]};
}

/* ============ AI ============ */
const BASE_SYS=`You are "MIMI ASSISTANT", an expert agricultural and livestock consultant for the MIMI NI MKULIMA application.
Provide accurate, structured, and actionable advice in English or Kiswahili, matching the language of the user.
Give practical measurements (acres, kg, liters, local currency) and safety instructions.
For agrochemicals, pesticides, and veterinary vaccines: explain foundational guidelines, recommend reading product labels, and advise consulting local extension agents or veterinarians for critical symptoms.
Never invent statistics or fluctuating market prices. Keep responses concise, organized, and helpful.`;

function farmOf(k){const u=curUser();if(!u)return{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]};return u.farm[k]=u.farm[k]||{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]}}
function farmContext(k){const f=farmOf(k),p=[];if(f.name)p.push('Name: '+f.name);if(f.size)p.push((k==='kilimo'?'Size (acres): ':'Herd size: ')+f.size);if(f.items)p.push((k==='kilimo'?'Crops: ':'Livestock: ')+f.items);if(f.place)p.push('Location: '+f.place);if(f.notes)p.push('Overview: '+f.notes);const o=f.tasks.filter(t=>!t.done).slice(0,8).map(t=>t.text);if(o.length)p.push('Pending tasks: '+o.join('; '));return p.length?p.join('\n'):'(No details recorded yet.)'}
function sysFor(mode){let s=BASE_SYS;const k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji';
  s+=k==='kilimo'?'\nFocus: Agriculture & crop husbandry.':'\nFocus: Livestock & animal husbandry.';
  if(mode==='shamba'||mode==='banda')s+='\nUser profile context:\n'+farmContext(k)+'\nUse this profile to personalize your recommendation.';
  return s}

async function runAI(turns,o){o=o||{};
  const t=turns.slice(-14).map(x=>({role:x.role,content:String(x.content).slice(0,6000)}));
  while(t.length&&t[0].role==='assistant')t.shift();
  try {
    const imageData=o.images?await imgToData(o.images):undefined;
    const res=await fetch('/api/v1/ai/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      signal:o.signal,
      body:JSON.stringify({
        messages:t,
        system_prompt:o.system||BASE_SYS,
        mode:o.mode||'kilimo',
        ...(imageData?{image_data:imageData}:{})
      })
    });
    if(!res.ok){
      const err=await res.json().catch(()=>({}));
      throw{code:res.status===429?'rate_limited':'upstream_error',text:err.detail||'AI service is currently unavailable. Please try again.'};
    }
    const data=await res.json();
    if(typeof data.text!=='string'||!data.text.trim())throw{code:'empty_completion'};
    return{text:data.text};
  }catch(e){
    if(e&&e.code)throw e;
    if(e&&e.name==='AbortError')throw{code:'cancelled',text:curLang()==='en'?'Request was stopped.':'Ombi lako limesimamishwa.'};
    throw{code:'backend_error',text:curLang()==='en'?'Could not connect to the backend server. Make sure it is running on port 8000.':'Imeshindwa kuunganishwa na seva ya backend kwenye port 8000.'};
  }
}

function aiErr(e){const c=e&&e.code;if(c==='cancelled')return'';if(c==='rate_limited')return'AI usage limit reached. Please try again later.';if(c==='upstream_error'||c==='empty_completion')return'AI service is unavailable right now. Please try again.';if(c==='prompt_too_large')return'The message is too long. Please shorten it and try again.';return'AI service is currently offline or unreachable.'}

/* ============ router ============ */
const S={view:'home',sec:'kilimo',tab:'jifunze',ltab:'muhtasari',ct:'chats',thread:null,cv:null,stream:{tab:'you',q:'',focus:null},learn:{q:'',tab:'maelezo',doc:null,media:{query:'',loading:false,results:[],error:null},mediaRequest:0},auth:'login',ptab:'maudhui'};
const VIEWS={},POST={},SECTAB={},ACT={},FORM={};
const chatPal=()=>ST().chatTheme==='system'?(ST().dark?'dark':'light'):ST().chatTheme;

function applyPrefs(){
  const s=ST(),r=document.documentElement;
  r.dataset.theme=s.dark?'dark':'light';
  r.style.setProperty('--ts',String(s.size/100));
  r.style.setProperty('--font-body',s.font==='serif'?"'Times New Roman',Georgia,serif":s.font==='mono'?"ui-monospace,'SF Mono',Menlo,Consolas,monospace":"'Figtree',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif");
  const langInd=$('#langIndicator');
  if(langInd)langInd.textContent=curLang().toUpperCase();
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
}

function go(v,p){Object.assign(S,{view:v},p||{});closeSheet();render();$('#main').scrollTop=0}
function needLogin(msg){if(curUser())return false;toast(msg||t('guest_note'));go('account',{auth:'login'});return true}
const refreshSec=()=>{const b=$('#secBody');if(b)b.innerHTML=SECTAB[S.tab]();else render()};

/* ============ home ============ */
const furrows=()=>Array.from({length:9},(_,i)=>{const y=30+i*26;return`<path d="M0 ${y} C 180 ${y-38}, 420 ${y+38}, 800 ${y-12}"/>`}).join('');
VIEWS.home=()=>{const u=curUser();
  return`<div class="view"><header class="hero"><svg class="furrows" viewBox="0 0 800 260" preserveAspectRatio="none" aria-hidden="true">${furrows()}</svg>
  <p class="hello">${u?t('hello_back')+', '+esc(u.name.split(' ')[0]):t('hello_guest')}</p>
  <h1 class="mark"><span>MIMI NI</span>MKULIMA</h1><p class="lede">${t('home_lede')}</p></header>
  <div class="split">
   <button class="door" data-act="openSec" data-sec="kilimo">${ic('leaf','door-ic')}<span class="door-t">${t('door_grow_t')}</span><span class="door-s">${t('door_grow_s')}</span><span class="chips"><i>${t('door_grow_c1')}</i><i>${t('door_grow_c2')}</i><i>${t('door_grow_c3')}</i><i>${t('door_grow_c4')}</i></span></button>
   <button class="door ochre" data-act="openSec" data-sec="ufugaji">${ic('paw','door-ic')}<span class="door-t">${t('door_raise_t')}</span><span class="door-s">${t('door_raise_s')}</span><span class="chips"><i>${t('door_raise_c1')}</i><i>${t('door_raise_c2')}</i><i>${t('door_raise_c3')}</i><i>${t('door_raise_c4')}</i></span></button>
  </div></div>`};

ACT.openSec=el=>{go('section',{sec:el.dataset.sec,tab:'jifunze',ltab:'muhtasari',learn:{q:'',tab:'maelezo',doc:null,media:{query:'',loading:false,results:[],error:null},mediaRequest:0}})};
ACT.stab=el=>{S.tab=el.dataset.t;render()};
ACT.go=el=>go(el.dataset.v);
ACT.closeSheet=()=>closeSheet();
ACT.toggleLang=()=>{
  DB.settings.lang=curLang()==='en'?'sw':'en';
  save();
  render();
  toast(t('toast_lang_changed'));
};

/* ============ section ============ */
VIEWS.section=()=>{const k=S.sec,T=SEC[k],isSw=curLang()==='sw';
  const title=isSw?(k==='kilimo'?'Kilimo Bora':'Ufugaji Bora'):T.title;
  const sub=isSw?(k==='kilimo'?'Mbinu za Kilimo':'Mbinu za Mifugo'):T.sub;
  const tabs=[
    ['jifunze',k==='kilimo'?t('learn_farming'):t('learn_livestock')],
    ['mtaalamu',t('tab_expert')],
    ['ai',t('tab_ai')],
    ['langu',k==='kilimo'?t('tab_my_farm'):t('tab_my_barn')]
  ];
  return`<div class="view" data-sec="${k}"><div class="sec-head"><button class="icon-btn" data-act="go" data-v="home" aria-label="${t('back_home')}">${ic('back')}</button><div><h2>${title}</h2><p class="muted small">${sub}</p></div></div>
  <div class="tabs" role="tablist">${tabs.map(([id,l])=>`<button role="tab" aria-selected="${S.tab===id}" class="${S.tab===id?'on':''}" data-act="stab" data-t="${id}">${l}</button>`).join('')}</div>
  <div id="secBody">${SECTAB[S.tab]()}</div></div>`};

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
    const response=await fetch(`/api/v1/media/images?q=${encodeURIComponent(searchTerm)}`);
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
SECTAB.mtaalamu=()=>{const experts=EXPERTS.filter(c=>c.kind===S.sec);
  return`<div class="note">${t('expert_note')}</div>
  <div class="list" style="margin-top:.6rem">${experts.map(c=>`<div class="item">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.role)}</span><br><span class="muted small">${esc(c.displayPhone)}</span></span><a class="btn sm" href="tel:${esc(c.phone)}" aria-label="${t('btn_call')} ${esc(c.name)}">${ic('phone')} ${t('btn_call')}</a></div>`).join('')}</div>
  <p class="muted small" style="margin:1rem 0 .3rem">${t('also_chat_ai')}</p><button class="btn ghost sm" data-act="openThread" data-id="ai">${t('open_ai_assistant')}</button>`};

/* --- AI chat --- */
let AIBUSY=false,AICTL=null,ATT=null;
function aiStore(mode){const p=P();p.ai=p.ai||{};return p.ai[mode]=p.ai[mode]||{sessions:[],active:null}}
function aiSess(mode,create){const st=aiStore(mode);let s=st.sessions.find(x=>x.id===st.active);if(!s&&create){s={id:uid('s'),title:curLang()==='en'?'New conversation':'Mazungumzo mapya',ts:now(),turns:[]};st.sessions.unshift(s);st.active=s.id}return s}
const bubHTML=t=>t.role==='user'?`<div class="bub me">${esc(t.content)}</div>`:`<div class="bub bot">${md(t.content)}</div>`;

function aiChatHTML(mode){const s=aiSess(mode,false),k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji',isSw=curLang()==='sw';
  const sugs=isSw?(SEC[k].sugs_sw||SEC[k].sugs):SEC[k].sugs;
  const msgs=s&&s.turns.length?s.turns.map(bubHTML).join(''):`<div class="ai-hello"><h3>${t('ai_assistant_name')}</h3><p>${t('ai_help_prompt')}</p><div class="sugs">${sugs.map(x=>`<button data-act="aiSug" data-q="${esc(x)}">${esc(x)}</button>`).join('')}</div></div>`;
  return`<section class="aichat" data-pal="${chatPal()}" data-mode="${mode}" aria-label="${t('tab_ai')}">
  <div class="ai-top"><button class="btn ghost sm" data-act="aiHistory">${ic('clock')} ${t('ai_history')}</button><button class="btn soft sm" data-act="aiNew">${ic('plus')} ${t('ai_new_chat')}</button></div>
  <div class="ai-msgs" id="aiMsgs" aria-live="polite">${msgs}</div><div id="attBar"></div>
  <div class="ai-in"><button class="icon-btn" data-act="aiAttach" aria-label="Attachment">${ic('plus')}</button><textarea class="field" id="aiText" rows="1" placeholder="${t('ai_input_ph')}" aria-label="Message"></textarea><button class="btn" id="aiGo" data-act="aiSend" aria-label="Send">${ic('send')}</button></div></section>`}

SECTAB.ai=()=>aiChatHTML(SEC[S.sec].ai);
POST.section=()=>{const b=$('#aiMsgs');if(b)b.scrollTop=b.scrollHeight};
function setGo(busy){const b=$('#aiGo');if(b){b.dataset.act=busy?'aiStop':'aiSend';b.innerHTML=ic(busy?'stop':'send');b.setAttribute('aria-label',busy?'Stop':'Send')}}

async function aiSend(text){const root=$('.aichat');if(!root||AIBUSY)return;const mode=root.dataset.mode,ta=$('#aiText');
  text=(text!=null?text:ta.value).trim();const att=ATT;if(!text&&!att)return;
  const s=aiSess(mode,true);let aug=text,images;
  if(att){if(att.kind==='image'){images=att.file;aug=text||(curLang()==='en'?'Please inspect this crop/animal image and provide agricultural advice.':'Tafadhali chunguza picha hii na unipe ushauri.')}else aug=(text||(curLang()==='en'?'Please review this attached file:':'Tafadhali soma faili hili.'))+`\n\n[File: ${att.name}]\n${att.text}`}
  const shown=(att?(att.kind==='image'?'📷 ':'📎 '):'')+(text||(att?att.name:''));
  s.turns.push({role:'user',content:shown});if(s.turns.length===1)s.title=shown.slice(0,42);s.ts=now();
  ta.value='';ATT=null;$('#attBar').innerHTML='';
  const box=$('#aiMsgs');if(!box.querySelector('.bub'))box.innerHTML='';
  box.insertAdjacentHTML('beforeend',bubHTML({role:'user',content:shown}));
  const bot=document.createElement('div');bot.className='bub bot';bot.innerHTML=`<span class="pulse"></span> ${t('ai_thinking')}`;box.appendChild(bot);box.scrollTop=box.scrollHeight;
  AIBUSY=true;AICTL=new AbortController();setGo(true);
  const callTurns=s.turns.slice(0,-1).concat({role:'user',content:aug});let reply='';
  try{const r=await runAI(callTurns,{system:sysFor(mode),signal:AICTL.signal,images});reply=r.text}
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
ACT.aiAttach=()=>sheet(t('attach_title'),`<div class="menu"><button data-act="attKind" data-k="file">${ic('clip')} ${t('attach_file')}</button><button data-act="attKind" data-k="image">${ic('image')} ${t('attach_photo')}</button><button data-act="attKind" data-k="camera">${ic('camera')} ${t('attach_camera')}</button></div><p class="muted small" style="margin-top:.6rem">${t('attach_guide')}</p>`);
ACT.attKind=async el=>{const kind=el.dataset.k;closeSheet();
  if(kind==='file'&&!ST().perm.file)return toast(t('perm_file_disabled'));
  if(kind==='camera'&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  const f=await pickFile(kind==='file'?'.txt,.csv,.md,.json,text/plain':'image/*',kind==='camera'?'environment':'');if(!f)return;
  ATT=kind==='file'?{kind:'file',name:f.name,text:(await f.text()).slice(0,8000)}:{kind:'image',name:f.name,file:f};
  const b=$('#attBar');if(b)b.innerHTML=`<div class="att">${ic(kind==='file'?'clip':'image')}<span class="grow">${esc(ATT.name)}</span><button class="icon-btn" data-act="attClear" aria-label="Remove">${ic('x')}</button></div>`};
ACT.attClear=()=>{ATT=null;$('#attBar').innerHTML=''};

/* --- farm --- */
function farmHTML(){const k=S.sec,T=SEC[k];
  if(!curUser())return`<div class="empty"><b>${k==='kilimo'?t('tab_my_farm'):t('tab_my_barn')}</b>${t('farm_gate')}<p style="margin-top:1rem"><button class="btn" data-act="go" data-v="account">${t('btn_login_signup')}</button></p></div>`;
  const f=farmOf(k),tabs=[['muhtasari',t('tab_summary')],['kazi',t('tab_tasks')],['fedha',t('tab_finances')],['ai',t('tab_ai_advisor')]];
  const inc=f.ledger.filter(x=>x.type==='in').reduce((a,x)=>a+x.amt,0),exp=f.ledger.filter(x=>x.type==='out').reduce((a,x)=>a+x.amt,0);
  let b='';
  if(S.ltab==='muhtasari')b=`<div class="stats"><div class="stat"><span class="muted small">${t('stat_tasks_left')}</span><b>${f.tasks.filter(t=>!t.done).length}</b></div><div class="stat"><span class="muted small">${t('stat_income')}</span><b>${money(inc)}</b></div><div class="stat"><span class="muted small">${t('stat_profit')}</span><b>${money(inc-exp)}</b></div></div>
  <form class="form" data-form="farm"><label class="lab">${t('lbl_farm_name')}<input class="field" name="name" value="${esc(f.name)}" maxlength="60"></label>
  <label class="lab">${t('lbl_farm_size')}<input class="field" name="size" value="${esc(f.size)}" maxlength="40"></label>
  <label class="lab">${t('lbl_farm_items')}<input class="field" name="items" value="${esc(f.items)}" maxlength="120" placeholder="${k==='kilimo'?t('ph_farm_crop'):t('ph_farm_ani')}"></label>
  <label class="lab">${t('lbl_place')}<input class="field" name="place" value="${esc(f.place)}" maxlength="120"></label>
  <label class="lab">${t('lbl_notes')}<textarea class="field" name="notes" maxlength="500">${esc(f.notes)}</textarea></label>
  <div class="row wrap"><button class="btn">${t('btn_save')}</button>${PRIV().location?`<button type="button" class="btn ghost" data-act="farmLoc">${ic('tag')} ${t('btn_use_location')}</button>`:''}</div></form>`;
  else if(S.ltab==='kazi')b=`<form class="row" data-form="task"><input class="field grow" name="text" placeholder="${t('ph_new_task')}" maxlength="120" aria-label="New task"><input class="field" style="width:auto" type="date" name="due" aria-label="Date"><button class="btn">${ic('plus')}</button></form>
  <div class="list" style="margin-top:.6rem">${f.tasks.length?f.tasks.map(t=>`<div class="item"><button class="chk ${t.done?'on':''}" data-act="taskTog" data-id="${t.id}" role="checkbox" aria-checked="${t.done}" aria-label="Complete">${t.done?ic('check'):''}</button><span class="grow ${t.done?'done':''}">${esc(t.text)}${t.due?`<br><span class="muted small">Date: ${esc(t.due)}</span>`:''}</span><button class="icon-btn" data-act="taskDel" data-id="${t.id}" aria-label="Delete">${ic('trash')}</button></div>`).join(''):`<div class="empty"><b>${t('no_tasks')}</b>${t('no_tasks_sub')}</div>`}</div>`;
  else if(S.ltab==='fedha')b=`<div class="stats"><div class="stat"><span class="muted small">${t('stat_income')}</span><b class="in">${money(inc)}</b></div><div class="stat"><span class="muted small">${t('stat_expenses')}</span><b class="out">${money(exp)}</b></div><div class="stat"><span class="muted small">${t('stat_profit')}</span><b>${money(inc-exp)}</b></div></div>
  <form class="row wrap" data-form="ledger"><select class="field" name="type" style="width:auto" aria-label="Type"><option value="in">${t('fin_in')}</option><option value="out">${t('fin_out')}</option></select><input class="field grow" name="label" placeholder="${t('ph_fin_desc')}" maxlength="80" required><input class="field" style="width:8rem" name="amt" type="number" min="1" step="1" placeholder="TZS" required><button class="btn">${ic('plus')}</button></form>
  <div class="list" style="margin-top:.6rem">${f.ledger.length?f.ledger.slice().reverse().map(x=>`<div class="item"><span class="grow">${esc(x.label)}<br><span class="muted small">${ago(x.ts)}</span></span><b class="${x.type}">${x.type==='in'?'+':'−'}${money(x.amt)}</b><button class="icon-btn" data-act="ledDel" data-id="${x.id}" aria-label="Delete">${ic('trash')}</button></div>`).join(''):`<div class="empty"><b>${t('no_fin')}</b>${t('no_fin_sub')}</div>`}</div>`;
  else b=aiChatHTML(T.my);
  return`<div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ltab===i?'on':''}" data-act="ftab" data-t="${i}">${l}</button>`).join('')}</div>${b}`}

SECTAB.langu=farmHTML;
ACT.ftab=el=>{S.ltab=el.dataset.t;render()};
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
const AUTH_API_BASE=location.protocol==='file:'?'http://127.0.0.1:8000/api/v1':'/api/v1';
const normalizePhone=value=>{let number=value.replace(/[^\d+]/g,'');if(number.startsWith('00'))number='+'+number.slice(2);else if(number.startsWith('0'))number='+255'+number.slice(1);else if(!number.startsWith('+'))number='+'+number;return number};
function maskContact(value,channel){if(channel==='email'){const [name,domain]=value.split('@');return `${name.slice(0,1)}***@${domain}`}return `${'*'.repeat(Math.max(0,value.length-3))}${value.slice(-3)}`}
function passwordField(name,label,autocomplete){return`<label class="lab">${label}<span class="password-field"><input class="field" id="${name}" name="${name}" type="password" required minlength="6" maxlength="100" autocomplete="${autocomplete}"><button type="button" class="icon-btn" data-act="togglePassword" data-target="${name}" aria-label="${t('btn_show_pw')}" title="${t('btn_show_pw')}">${ic('eye')}</button></span></label>`}
async function authPost(path,data){let response;try{response=await fetch(`${AUTH_API_BASE}${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})}catch(e){throw new Error(t('verification_unavailable'))}const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(response.status===503||response.status>=500?t('verification_unavailable'):response.status===429?t('otp_retry_later'):t('verification_failed'));return result}
function accountExists(email,phone){return Object.values(DB.users).some(x=>email&&((x.login||'').toLowerCase()===email||(x.email||'').toLowerCase()===email)||phone&&(x.phone&&normalizePhone(x.phone)===phone||x.login&&!x.login.includes('@')&&normalizePhone(x.login)===phone))}
function findResetAccount(value){const id=value.trim().toLowerCase();if(id.includes('@')){const account=Object.values(DB.users).find(x=>(x.email||x.login||'').toLowerCase()===id);return account?{account,channel:'email',destination:account.email||account.login}:null}const phone=normalizePhone(id),account=Object.values(DB.users).find(x=>x.phone&&normalizePhone(x.phone)===phone||x.login&&!x.login.includes('@')&&normalizePhone(x.login)===phone);return account?{account,channel:'sms',destination:account.phone||normalizePhone(account.login)}:null}
function authHTML(){const reg=S.auth==='register',login=S.auth==='login';let body='';
  if(S.auth==='forgot')body=`<form class="form" data-form="requestReset"><label class="lab">${t('lbl_id')}<input class="field" name="id" required maxlength="254" autocomplete="username"></label><button class="btn">${t('btn_send_code')}</button><button type="button" class="btn ghost" data-act="backToLogin">${t('btn_change_details')}</button></form>`;
  else if(S.auth==='forgotCode')body=`<p class="note">${t('verification_sent_to')} <b>${esc(maskContact(PENDING_RESET.destination,PENDING_RESET.channel))}</b></p><form class="form" data-form="confirmResetCode"><label class="lab">${t('verification_code')}<input class="field" name="code" required inputmode="numeric" pattern="[0-9]{6}" minlength="6" maxlength="6" autocomplete="one-time-code"></label><button class="btn">${t('btn_verify_create')}</button><div class="row wrap"><button type="button" class="btn ghost sm" data-act="resendResetCode">${t('btn_resend_code')}</button><button type="button" class="btn ghost sm" data-act="backToForgot">${t('btn_change_details')}</button></div></form>`;
  else if(S.auth==='resetPassword')body=`<form class="form" data-form="resetPassword">${passwordField('newPw',t('lbl_new_pw'),'new-password')}${passwordField('confirmNewPw',t('lbl_confirm_pw'),'new-password')}<button class="btn">${t('btn_reset_password')}</button></form>`;
  else body=`<div class="tabs" role="tablist"><button class="${login?'on':''}" data-act="authTab" data-t="login">${t('login_tab')}</button><button class="${reg?'on':''}" data-act="authTab" data-t="register">${t('register_tab')}</button></div><form class="form" data-form="auth">${reg?`<label class="lab">${t('lbl_name')}<input class="field" name="name" required maxlength="60" autocomplete="name"></label><label class="lab">${t('lbl_email')}<input class="field" name="email" type="email" maxlength="254" autocomplete="email"></label><label class="lab">${t('lbl_phone')}<input class="field" name="phone" type="tel" maxlength="24" placeholder="+255 7XX XXX XXX" autocomplete="tel"></label>`:`<label class="lab">${t('lbl_id')}<input class="field" name="id" required maxlength="80" autocomplete="username"></label>`}${passwordField('pw',t('lbl_pw'),reg?'new-password':'current-password')}${reg?passwordField('confirmPw',t('lbl_confirm_pw'),'new-password'):''}<button class="btn">${reg?t('register_tab'):t('login_tab')}</button>${login?`<button type="button" class="btn ghost" data-act="forgotPassword">${t('forgot_password')}</button>`:''}<p class="note">${t('auth_note')}</p></form>`;
  const title=reg?t('register_title'):login?t('login_title'):t('reset_title');
  return`<div class="view" style="max-width:460px"><h2 style="font:800 2rem var(--font-display);letter-spacing:-.02em">${title}</h2>${body}<p class="muted small" style="margin-top:1rem">${t('guest_note')}</p></div>`}

ACT.authTab=el=>{PENDING_RESET=null;S.auth=el.dataset.t;render()};
ACT.togglePassword=el=>{const input=document.getElementById(el.dataset.target);if(!input)return;const visible=input.type==='password';input.type=visible?'text':'password';el.innerHTML=ic(visible?'eye-off':'eye');el.setAttribute('aria-label',t(visible?'btn_hide_pw':'btn_show_pw'));el.title=t(visible?'btn_hide_pw':'btn_show_pw')};
ACT.forgotPassword=()=>toast(t('forgot_unavailable'));
ACT.backToLogin=()=>{PENDING_RESET=null;S.auth='login';render()};
ACT.backToForgot=()=>{if(PENDING_RESET)delete PENDING_RESET.challengeId;S.auth='forgot';render()};
ACT.resendResetCode=async()=>{if(!PENDING_RESET)return;try{const result=await authPost('/users/password-reset/send',{channel:PENDING_RESET.channel,destination:PENDING_RESET.destination});PENDING_RESET.challengeId=result.challenge_id;toast(t('verification_sent'))}catch(e){toast(e.message||t('verification_unavailable'))}};
FORM.auth=async f=>{const pw=fv(f,'pw');
  if(S.auth==='register'){
    const name=fv(f,'name').trim(),email=fv(f,'email').trim().toLowerCase(),phone=fv(f,'phone').trim()?normalizePhone(fv(f,'phone').trim()):'',confirm=fv(f,'confirmPw');
    if(!name)return toast(t('lbl_name'));
    if(!email&&!phone)return toast(t('auth_contact_required'));
    if(pw!==confirm)return toast(t('password_mismatch'));
    if(accountExists(email,phone))return toast('This account already exists. Please log in.');
    const salt=uid('s'),u={id:uid('u'),name,login:email||phone,email,phone,salt,hash:await sha(salt+pw),bio:'',handle:'@'+(name.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,14)||'farmer')+Math.floor(10+Math.random()*90),ts:now()};
    newUserData(u);u.ai=DB.guest.ai||{};u.history=DB.guest.history||[];DB.guest={ai:{},history:[]};DB.users[u.id]=u;DB.session=u.id;save();toast((curLang()==='en'?'Welcome, ':'Karibu, ')+name.split(' ')[0]+'!');go('account')
  }else{
    const id=fv(f,'id').trim().toLowerCase(),phone=normalizePhone(id),u=Object.values(DB.users).find(x=>x.login===id||x.email===id||x.phone===id||x.phone&&normalizePhone(x.phone)===phone);
    if(!u||u.hash!==await sha(u.salt+pw))return toast('Invalid phone/email or password.');DB.session=u.id;save();go('account')
  }};
FORM.requestReset=async f=>{const target=findResetAccount(fv(f,'id'));if(!target)return toast(t('reset_account_missing'));try{const result=await authPost('/users/password-reset/send',{channel:target.channel,destination:target.destination});PENDING_RESET={accountId:target.account.id,channel:target.channel,destination:target.destination,challengeId:result.challenge_id};S.auth='forgotCode';render();toast(t('verification_sent'))}catch(e){toast(e.message||t('verification_unavailable'))}};
FORM.confirmResetCode=async f=>{if(!PENDING_RESET)return;try{const result=await authPost('/users/password-reset/confirm',{challenge_id:PENDING_RESET.challengeId,code:fv(f,'code').trim()});PENDING_RESET.resetToken=result.reset_token;S.auth='resetPassword';render()}catch(e){toast(e.message||t('verification_failed'))}};
FORM.resetPassword=async f=>{if(!PENDING_RESET)return;const password=fv(f,'newPw'),confirm=fv(f,'confirmNewPw');if(password!==confirm)return toast(t('password_mismatch'));const account=DB.users[PENDING_RESET.accountId];if(!account){PENDING_RESET=null;S.auth='login';render();return toast(t('reset_account_missing'))}const salt=uid('s'),hash=await sha(salt+password);try{await authPost('/users/password-reset/complete',{reset_token:PENDING_RESET.resetToken});account.salt=salt;account.hash=hash;DB.session=account.id;PENDING_RESET=null;save();toast(t('reset_success'));go('account')}catch(e){toast(e.message||t('verification_failed'))}};

function profileHTML(u){
  const followers=Object.values(DB.users).filter(x=>x.id!==u.id&&x.following.includes(u.id)).length;
  const mine=DB.posts.filter(p=>p.by===u.id).sort((a,b)=>b.ts-a.ts),tabs=[['maudhui',t('tab_posts')],['repost',t('tab_reposts')],['saved',t('tab_saved')],['soko',t('tab_market')]];
  const grid=a=>a.length?`<div class="grid3">${a.map(thumbHTML).join('')}</div>`:`<div class="empty"><b>${t('no_content')}</b>${t('no_content_sub')}</div>`;
  let b;
  if(S.ptab==='maudhui')b=grid(mine);else if(S.ptab==='repost')b=grid(DB.posts.filter(p=>u.reposts.includes(p.id)));
  else if(S.ptab==='saved')b=grid(DB.posts.filter(p=>u.saved.includes(p.id)));
  else b=`<p style="margin-bottom:.6rem"><button class="btn sm" data-act="addListing">${ic('plus')} ${t('btn_add_product')}</button></p>${u.listings.length?`<div class="list">${u.listings.map(l=>`<div class="item"><span class="grow"><b>${esc(l.name)}</b><br><span class="muted small">${esc(l.qty||'')}${l.place?' · '+esc(l.place):''}</span></span><b>TZS ${money(l.price)}</b><button class="icon-btn" data-act="delListing" data-id="${l.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')}</div>`:`<div class="empty"><b>${t('no_products')}</b>${t('no_products_sub')}</div>`}`;
  return`<div class="view" style="max-width:640px"><div class="row" style="justify-content:flex-end"><button class="icon-btn" data-act="profMenu" aria-label="Profile menu">${ic('more')}</button></div>
  <div class="prof">${av(u.name,'lg',colorOf(u.id))}<h2 style="font:800 1.5rem var(--font-display)">${esc(u.name)}</h2><span class="muted">${esc(u.handle)}</span>
  <p style="max-width:40ch">${u.bio?esc(u.bio):'<span class="muted">Add a short bio about yourself.</span>'}</p>
  <div class="counts"><button><b>${mine.length}</b><span class="muted small">${t('stat_posts')}</span></button><button data-act="followSheet"><b>${u.following.length}</b><span class="muted small">${t('stat_following')}</span></button><button data-act="followersSheet"><b>${followers}</b><span class="muted small">${t('stat_followers')}</span></button></div>
  <div class="row wrap" style="justify-content:center"><button class="btn ghost sm" data-act="editProfile">${ic('edit')} ${t('btn_edit_profile')}</button><button class="btn sm" data-act="newPost">${ic('plus')} ${t('btn_new_post')}</button></div></div>
  <div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ptab===i?'on':''}" data-act="ptab" data-t="${i}">${l}</button>`).join('')}</div>${b}</div>`}

ACT.ptab=el=>{S.ptab=el.dataset.t;render()};
ACT.profMenu=()=>sheet('Profile Menu',`<div class="menu"><button data-act="editProfile">${ic('edit')} ${t('btn_edit_profile')}</button><button data-act="followSheet">${ic('users')} ${t('stat_following')}</button><button data-act="ptabGo" data-t="soko">${ic('tag')} ${t('tab_market')}</button><button data-act="go" data-v="settings">${ic('settings')} ${t('nav_settings')}</button><button data-act="logout">${ic('logout')} ${t('st_logout')}</button></div>`);
ACT.ptabGo=el=>{closeSheet();S.ptab=el.dataset.t;render()};
ACT.editProfile=()=>{const u=curUser();sheet(t('btn_edit_profile'),`<form class="form" data-form="profile"><label class="lab">${t('lbl_name')}<input class="field" name="name" value="${esc(u.name)}" maxlength="60" required></label><label class="lab">${t('lbl_notes')} (bio)<textarea class="field" name="bio" maxlength="160">${esc(u.bio)}</textarea></label><button class="btn">${t('btn_save')}</button></form>`)};
FORM.profile=f=>{const u=curUser();u.name=fv(f,'name').trim()||u.name;u.bio=fv(f,'bio').trim();DB.posts.forEach(p=>{if(p.by===u.id)p.name=u.name});save();closeSheet();render()};
function followRows(ids,u,emptyKey){
  const people=ids.filter(id=>id!==u.id&&DB.users[id]);
  if(!people.length)return`<div class="empty">${t(emptyKey)}</div>`;
  return`<div class="list">${people.map(id=>{const person=DB.users[id],following=u.following.includes(id),mutual=(person.following||[]).includes(u.id);
    return`<div class="item">${av(person.name,'sm',colorOf(id))}<span class="grow"><button data-act="viewCreator" data-id="${esc(id)}"><b>${esc(person.name)}</b></button><br><span class="muted small">${esc(person.handle||'')}</span>${mutual?`<br><span class="pill">${t('follows_you')}</span>`:''}</span><button class="icon-btn" data-act="messageCreator" data-id="${esc(id)}" aria-label="${t('btn_message')} ${esc(person.name)}" title="${t('btn_message')}">${ic('chat')}</button><button class="btn ghost sm" data-act="follow" data-id="${esc(id)}">${following?t('btn_unfollow'):t('btn_follow_back')}</button></div>`}).join('')}</div>`;
}
ACT.followSheet=()=>{const u=curUser();sheet(t('stat_following'),followRows(u.following,u,'no_following'))};
ACT.followersSheet=()=>{const u=curUser(),followers=Object.values(DB.users).filter(person=>(person.following||[]).includes(u.id)).map(person=>person.id);sheet(t('stat_followers'),followRows(followers,u,'no_followers'))};
ACT.messageCreator=el=>{const u=curUser(),peer=DB.users[el.dataset.id];if(!u||!peer||peer.id===u.id)return;u.chats[peer.id]=u.chats[peer.id]||{id:peer.id,type:'dm',name:peer.name,unread:0,msgs:[]};S.ct='chats';go('chat',{thread:peer.id})};
ACT.logout=()=>{DB.session=null;save();closeSheet();S.thread=null;go('home');toast(t('toast_logged_out'))};
ACT.addListing=()=>sheet(t('btn_add_product'),`<form class="form" data-form="listing"><label class="lab">${t('lbl_prod_name')}<input class="field" name="name" required maxlength="60" placeholder="${t('ph_prod_name')}"></label><label class="lab">${t('lbl_prod_price')}<input class="field" name="price" type="number" min="0" required></label><label class="lab">${t('lbl_prod_qty')}<input class="field" name="qty" maxlength="40" placeholder="${t('ph_prod_qty')}"></label><label class="lab">${t('lbl_prod_place')}<input class="field" name="place" maxlength="60"></label><button class="btn">${t('btn_add_product')}</button></form>`);
FORM.listing=f=>{curUser().listings.unshift({id:uid('l'),name:fv(f,'name').trim(),price:Math.round(+fv(f,'price')),qty:fv(f,'qty').trim(),place:fv(f,'place').trim(),ts:now()});save();closeSheet();S.ptab='soko';render()};
ACT.delListing=el=>{const u=curUser();u.listings=u.listings.filter(l=>l.id!==el.dataset.id);save();render()};

/* ============ stream ============ */
const EMO=['😀','😂','😍','👏','🙏','🔥','🌽','🐔','🐄','🌱','💪','👍'];
function feedPosts(){const u=curUser(),q=S.stream.q.toLowerCase();let a=DB.posts.slice().sort((x,y)=>y.ts-x.ts);
  if(S.stream.tab==='friends')a=u?a.filter(p=>p.by===u.id||u.following.includes(p.by)):[];
  if(q)a=a.filter(p=>((p.text||'')+' '+(p.caption||'')+' '+p.name+' '+p.tag).toLowerCase().includes(q));return a}
function postHTML(p){const u=curUser(),liked=u&&u.liked.includes(p.id),saved=u&&u.saved.includes(p.id),rep=u&&u.reposts.includes(p.id),own=u&&p.by===u.id,fol=u&&u.following.includes(p.by),s=safeSrc(p.src);
  const media=p.kind==='image'&&s?`<img class="pm" src="${s}" alt="${esc(p.caption||'Photo')}">`:p.kind==='video'&&s?`<video class="pm" src="${s}" controls playsinline loop></video>`:p.kind==='video'||p.kind==='image'?`<div class="pm textcard" style="background:${BGS[0]}"><p>Media file no longer available from temporary session.</p></div>`:`<div class="pm textcard" style="background:${BGS[p.bg||0]}"><p>${esc(p.text)}</p></div>`;
  return`<section class="post" id="p_${esc(p.id)}" data-id="${esc(p.id)}">${media}
  <div class="pinfo"><div class="by">${av(p.name,'sm',p.color)}<button data-act="viewCreator" data-id="${esc(p.by)}">${esc(p.handle||p.name)}</button>${own?'':`<button class="follow ${fol?'on':''}" data-act="follow" data-id="${esc(p.by)}">${fol?t('btn_following'):t('btn_follow')}</button>`}</div>
  ${(p.kind!=='text'&&p.text)?`<p class="cap">${esc(p.text)}</p>`:''}${p.caption?`<p class="cap">${esc(p.caption)}</p>`:''}${p.seed?'<p class="small" style="opacity:.7">Sample Post</p>':''}</div>
  <div class="acts"><button class="${liked?'on':''}" data-act="like" data-id="${esc(p.id)}" aria-label="Like">${ic('heart')}<span>${(p.likedBy||[]).length}</span></button>
  <button data-act="comments" data-id="${esc(p.id)}" aria-label="Comments">${ic('comment')}<span>${(p.comments||[]).length}</span></button>
  <button data-act="share" data-id="${esc(p.id)}" aria-label="Share">${ic('share')}<span>${t('share_title')}</span></button>
  <button class="sv ${saved?'on':''}" data-act="save" data-id="${esc(p.id)}" aria-label="Bookmark">${ic('bookmark')}<span>${t('tab_saved')}</span></button>
  <button class="rp ${rep?'on':''}" data-act="repost" data-id="${esc(p.id)}" aria-label="Repost">${ic('repeat')}<span>${p.reposts||0}</span></button>
  ${own?`<button data-act="postMenu" data-id="${esc(p.id)}" aria-label="More">${ic('more')}</button>`:''}</div></section>`}

VIEWS.stream=()=>{const a=feedPosts();
  return`<div class="stream fillabs" data-pal="dark"><div class="stop"><div class="tabs" role="tablist"><button class="${S.stream.tab==='you'?'on':''}" data-act="sTab" data-t="you">${t('stream_tab_you')}</button><button class="${S.stream.tab==='friends'?'on':''}" data-act="sTab" data-t="friends">${t('stream_tab_friends')}</button></div>
  <form class="searchbar" data-form="ssearch" role="search">${ic('search')}<input name="q" value="${esc(S.stream.q)}" placeholder="${t('search_stream_ph')}" aria-label="Search content" autocomplete="off"></form><button class="icon-btn" data-act="newPost" aria-label="New post">${ic('plus')}</button></div>
  ${a.length?`<div class="feed" id="feed">${a.map(postHTML).join('')}</div>`:`<div class="empty" style="position:absolute;inset:0;display:grid;place-content:center;color:#fff"><b style="color:#fff">${S.stream.tab==='friends'?(curUser()?'Not following anyone yet':t('farm_login_btn')):t('no_stream_results')}</b>${S.stream.tab==='friends'?t('no_stream_friends'):'Try searching for another topic or create your own post.'}</div>`}</div>`};

POST.stream=()=>{const id=S.stream.focus;if(id){const el=$('#p_'+CSS.escape(id));if(el)el.scrollIntoView();S.stream.focus=null}};
ACT.sTab=el=>{S.stream.tab=el.dataset.t;render()};
FORM.ssearch=f=>{S.stream.q=fv(f,'q').trim();render()};
ACT.openPost=el=>{S.stream={tab:'you',q:'',focus:el.dataset.id};go('stream')};
function refreshPost(id){const p=post(id),el=$('#p_'+CSS.escape(id));if(p&&el){const tEl=document.createElement('div');tEl.innerHTML=postHTML(p);el.replaceWith(tEl.firstElementChild)}}
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
ACT.newPost=()=>{if(needLogin('Please log in to publish posts.'))return;NP={kind:'text'};sheet(t('btn_new_post'),`<form class="form" data-form="post"><label class="lab">Message<textarea class="field" name="text" maxlength="200" placeholder="Write an agricultural tip or question"></textarea></label>
  <div class="row wrap"><button type="button" class="btn ghost sm" data-act="npMedia" data-k="image">${ic('image')} Photos</button><button type="button" class="btn ghost sm" data-act="npMedia" data-k="video">${ic('video')} Video</button><span id="npName" class="muted small"></span></div>
  <label class="lab">Caption or hashtags<input class="field" name="cap" maxlength="120" placeholder="#maize #advice"></label>
  <label class="lab">Category<select class="field" name="tag"><option value="kilimo">Farming</option><option value="ufugaji">Livestock</option></select></label><button class="btn">Publish</button></form>`)};
ACT.npMedia=async el=>{const k=el.dataset.k;if(!ST().perm.file)return toast(t('perm_file_disabled'));const f=await pickFile(k==='image'?'image/*':'video/*');if(!f)return;
  try{if(k==='image')NP={kind:'image',src:await imgToData(f)};else{if(f.size>80e6)return toast('Video exceeds maximum size of 80MB.');NP={kind:'video',src:URL.createObjectURL(f)}}const n=$('#npName');if(n)n.textContent=f.name}catch(e){toast('Could not read file.')}};
FORM.post=f=>{const text=fv(f,'text').trim();if(!text&&(!NP||NP.kind==='text'))return toast('Please enter text or attach media.');const u=curUser();
  DB.posts.unshift({id:uid('p'),by:u.id,name:u.name,handle:u.handle,color:colorOf(u.id),kind:NP.kind,src:NP.src||null,text,caption:fv(f,'cap').trim(),tag:fv(f,'tag'),bg:Math.floor(Math.random()*BGS.length),ts:now(),likedBy:[],reposts:0,comments:[]});
  const v=NP.kind==='video';NP=null;save();closeSheet();S.stream={tab:'you',q:'',focus:null};render();toast(v?'Published. Video is viewable for this active session.':'Published successfully.')};

/* ============ chat ============ */
const TYPING={};let REC=null,recT=null,CALL=null;
const contactOf=id=>{const u=curUser();return u&&u.contacts.find(c=>c.id===id)};
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

function statusBody(){const u=curUser(),cut=now()-864e5,l=u.statuses.filter(s=>s.ts>cut),mine=l.filter(s=>s.by==='me'),others=l.filter(s=>s.by!=='me'&&!(contactOf(s.by)||{}).blocked);
  return`<div class="pad"><button class="item" data-act="${mine.length?'viewStatus':'addStatus'}" data-id="${mine.length?mine[mine.length-1].id:''}">${av(u.name,mine.length?'ring':'',colorOf(u.id))}<span class="grow"><b>${t('lbl_my_status')}</b><br><span class="muted small">${mine.length?'Updated '+ago(mine[mine.length-1].ts):'Tap to post a status'}</span></span></button>
  <p style="margin:.4rem 0"><button class="btn sm" data-act="addStatus">${ic('plus')} ${t('lbl_add_status')}</button></p>
  <h3 style="font:800 1rem var(--font-display);margin:.8rem 0 .2rem">${t('lbl_recent_status')}</h3>${others.length?`<div class="list">${others.map(s=>{const c=contactOf(s.by);return`<button class="item" data-act="viewStatus" data-id="${s.id}">${av(c.name,'ring',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${ago(s.ts)}</span></span></button>`}).join('')}</div>`:`<div class="empty">${t('no_status')}</div>`}</div>`}

function channelsBody(){const u=curUser();
  if(S.cv&&S.cv.startsWith('ch:')){const ch=u.channels.find(c=>c.id===S.cv.slice(3));if(ch)return`<div class="pad"><div class="row"><button class="icon-btn" data-act="chBack" aria-label="Back">${ic('back')}</button><div class="grow"><b>${esc(ch.name)}</b><br><span class="muted small">${esc(ch.desc)}</span></div><button class="btn sm ${ch.followed||ch.mine?'ghost':''}" data-act="chFollow" data-id="${ch.id}">${ch.mine?t('channel_yours'):ch.followed?t('btn_following'):t('btn_follow')}</button></div>
    ${ch.mine?`<form class="row" data-form="chpost" data-id="${ch.id}" style="margin:.8rem 0"><input class="field grow" name="t" maxlength="300" placeholder="Write a channel broadcast" aria-label="Broadcast message"><button class="btn" aria-label="Send">${ic('send')}</button></form>`:''}
    <div style="margin-top:.6rem">${ch.posts.length?ch.posts.slice().sort((a,b)=>b.ts-a.ts).map(p=>`<div class="card" style="margin-bottom:.6rem"><p>${esc(p.text)}</p><span class="muted small">${ago(p.ts)}</span></div>`).join(''):'<div class="empty">No broadcast messages yet.</div>'}</div></div>`}
  const q=(S.chq||'').toLowerCase();
  return`<div class="pad"><div class="row"><div class="searchbar grow">${ic('search')}<input id="chq" value="${esc(S.chq||'')}" placeholder="${t('search_channels_ph')}" aria-label="Search channels"></div><button class="btn sm" data-act="chCreate">${ic('plus')} ${t('btn_create_channel')}</button></div><div id="chlist">${chList(q)}</div></div>`}

function chList(q){const l=curUser().channels.filter(c=>c.name.toLowerCase().includes(q));return l.length?`<div class="list" style="margin-top:.6rem">${l.map(c=>`<button class="item" data-act="chOpen" data-id="${c.id}">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.desc)}</span></span>${c.mine?'<span class="pill">Mine</span>':c.followed?'<span class="pill">Following</span>':''}</button>`).join('')}</div>`:'<div class="empty">No channels found.</div>'}
const chatBodyFor=()=>S.ct==='calls'?callsBody():S.ct==='status'?statusBody():S.ct==='channels'?channelsBody():`<div class="pad"><div class="searchbar">${ic('search')}<input id="cq" value="${esc(S.cq||'')}" placeholder="${t('search_chats_ph')}" aria-label="Search conversations"></div></div><div id="clist">${chatList()}</div><button class="fab" data-act="newChat" aria-label="New chat">${ic('chat')}</button>`;
const paintChatBody=()=>{const b=$('#cbody');if(b)b.innerHTML=chatBodyFor()};

function msgsHTML(c){return c.msgs.map(m=>{if(m.kind==='sys')return`<div class="m sys">${esc(m.text)}</div>`;const me=m.from==='me';let body;
    if(m.kind==='image')body=safeSrc(m.src)?`<img src="${safeSrc(m.src)}" alt="Photo">`:'📷 Photo no longer available';
    else if(m.kind==='voice')body=safeSrc(m.src)?`<audio controls src="${safeSrc(m.src)}"></audio>`:'🎤 Voice note';
    else if(m.kind==='file')body=`📎 ${esc(m.name||'File')}`;else body=m.from==='ai'?md(m.text):esc(m.text);
    return`<div class="m ${me?'me':'them'}">${body}<span style="display:block;text-align:right;font-size:.65rem;opacity:.65">${hhmm(m.ts)}</span></div>`}).join('')+(TYPING[c.id]?'<div class="m them"><span class="pulse"></span> Typing…</div>':'')}

function paintThread(){const u=curUser(),c=u&&u.chats[S.thread],b=$('#msgs');if(c&&b){b.innerHTML=msgsHTML(c);b.scrollTop=b.scrollHeight}}
function composeHTML(){if(REC)return`<button class="icon-btn" data-act="recCancel" aria-label="Cancel">${ic('trash')}</button><span class="rec"><span class="pulse" style="background:var(--danger)"></span> ${t('recording_label')} <span id="recT">0:00</span></span><button class="btn" data-act="rec" aria-label="Send audio">${ic('send')}</button>`;
  return`<button class="icon-btn" data-act="thAttach" aria-label="Attach">${ic('plus')}</button><button class="icon-btn" data-act="thCamera" aria-label="Camera">${ic('camera')}</button><textarea class="field" id="msgText" rows="1" placeholder="${t('ph_message')}" aria-label="Message"></textarea><button class="icon-btn" data-act="emoToggle" aria-label="Emoji">${ic('smile')}</button><button class="icon-btn" id="micBtn" data-act="rec" aria-label="Record">${ic('mic')}</button><button class="btn hidden" id="sendBtn" data-act="thSend" aria-label="Send">${ic('send')}</button>`}
const paintCompose=()=>{const c=$('#compose');if(c)c.innerHTML=composeHTML()};

function threadHTML(){const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null,n=chatTitle(c);c.unread=0;
  const sub=ct?(ct.ai?'AI Assistant':ct.role||''):c.type==='group'?'Group':'';
  return`<div class="fillabs thread" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><button class="icon-btn" data-act="thBack" aria-label="Back">${ic('back')}</button>${av(n,'sm',colorOf(c.id))}<div class="grow"><b>${esc(n)}</b><br><span class="muted small">${esc(sub)}</span></div>${ct&&!ct.ai?`<button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Audio call">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Video call">${ic('video')}</button>`:''}<button class="icon-btn" data-act="thMenu" aria-label="Menu">${ic('more')}</button></div>
  <div class="msgs" id="msgs">${msgsHTML(c)}</div><div id="emoRow" class="emojis hidden" style="padding:.3rem .6rem;background:var(--surface)">${EMO.map(e=>`<button type="button" data-act="emo" data-e="${e}" aria-label="Emoji ${e}">${e}</button>`).join('')}</div><div class="compose" id="compose">${composeHTML()}</div></div>`}

VIEWS.chat=()=>{if(!curUser())return gate(t('nav_chat'));if(S.thread)return threadHTML();
  const titles={chats:t('ct_chats'),calls:t('ct_calls'),status:t('ct_status'),channels:t('ct_channels')};
  return`<div class="fillabs" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><h2>${titles[S.ct]}</h2>${S.ct==='chats'?`<button class="icon-btn" data-act="cmenu" aria-label="Menu">${ic('more')}</button>`:''}</div><div class="cbody" id="cbody" style="position:relative">${chatBodyFor()}</div>
  <div class="ctabs" role="tablist">${[['chats','chat',t('ct_chats')],['calls','phone',t('ct_calls')],['status','status',t('ct_status')],['channels','mega',t('ct_channels')]].map(([i,c,l])=>`<button role="tab" class="${S.ct===i?'on':''}" data-act="ctab" data-t="${i}">${ic(c)}<span>${l}</span></button>`).join('')}</div></div>`};

POST.chat=()=>{const b=$('#msgs');if(b)b.scrollTop=b.scrollHeight};
ACT.ctab=el=>{S.ct=el.dataset.t;S.cv=null;render()};
ACT.openThread=el=>{if(needLogin())return;ensureChat(el.dataset.id);S.ct='chats';go('chat',{thread:el.dataset.id})};
ACT.thBack=()=>{S.thread=null;if(REC)recStop(true);render()};

async function sendMsg(chatId,text,extra){const c=ensureChat(chatId);c.msgs.push(Object.assign({id:uid('m'),from:'me',kind:'text',text,ts:now()},extra||{}));save();if(S.view==='chat'&&S.thread===chatId)paintThread();
  const ct=c.type==='dm'?contactOf(chatId):null;if(ct&&ct.ai&&!ct.blocked&&(!extra||!extra.kind||extra.kind==='text'))await botReply(ct,c)}

async function botReply(ct,c){const key=c.id;TYPING[key]=true;if(S.view==='chat'&&S.thread===key)paintThread();
  const hist=c.msgs.filter(m=>m.kind==='text'&&m.text).slice(-12).map(m=>({role:m.from==='me'?'user':'assistant',content:m.text}));
  while(hist.length&&hist[0].role==='assistant')hist.shift();
  let reply;try{reply=(await runAI(hist,{system:BASE_SYS})).text}catch(e){reply=(e&&e.text)||localGuide(hist.length?hist[hist.length-1].content:'')||aiErr(e)}
  TYPING[key]=false;const u=curUser();if(!u||!u.chats[key])return;u.chats[key].msgs.push({id:uid('m'),from:ct.id,kind:'text',text:reply,ts:now()});
  const open=S.view==='chat'&&S.thread===key;if(!open)u.chats[key].unread++;save();if(S.view==='chat'){if(open)paintThread();else if(!S.thread&&S.ct==='chats')paintChatBody()}}

ACT.thSend=()=>{const tBox=$('#msgText');if(!tBox)return;const v=tBox.value.trim();if(!v)return;tBox.value='';tBox.style.height='';$('#sendBtn').classList.add('hidden');$('#micBtn').classList.remove('hidden');sendMsg(S.thread,v)};
ACT.emoToggle=()=>{const r=$('#emoRow');if(r)r.classList.toggle('hidden')};
ACT.thAttach=()=>sheet(t('attach_title'),`<div class="menu"><button data-act="thFile" data-k="image">${ic('image')} ${t('attach_photo')}</button><button data-act="thFile" data-k="file">${ic('clip')} ${t('attach_file')}</button></div>`);
ACT.thCamera=()=>attachTo('image','environment');
ACT.thFile=el=>{closeSheet();attachTo(el.dataset.k)};
async function attachTo(k,cap){if(!ST().perm.file&&!cap)return toast(t('perm_file_disabled'));if(cap&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  const f=await pickFile(k==='image'?'image/*':'',cap);if(!f)return;try{if(k==='image')sendMsg(S.thread,'',{kind:'image',src:await imgToData(f,900,.7)});else sendMsg(S.thread,'',{kind:'file',name:f.name,size:f.size})}catch(e){toast('Could not read file.')}}

ACT.rec=()=>{if(REC)recStop(false);else recStart()};ACT.recCancel=()=>recStop(true);
async function recStart(){if(!ST().perm.mic)return toast(t('perm_mic_disabled'));if(!navigator.mediaDevices||!window.MediaRecorder)return toast(t('audio_unsupported'));
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),mr=new MediaRecorder(st),ch=[];mr.ondataavailable=e=>{if(e.data&&e.data.size)ch.push(e.data)};REC={mr,st,ch,t0:now(),cancel:false,chat:S.thread};
    mr.onstop=()=>{st.getTracks().forEach(tTr=>tTr.stop());const r=REC;REC=null;clearInterval(recT);paintCompose();if(!r||r.cancel)return;const blob=new Blob(r.ch,{type:mr.mimeType||'audio/webm'});sendMsg(r.chat,'',{kind:'voice',src:URL.createObjectURL(blob),dur:Math.round((now()-r.t0)/1000)})};
    mr.start();recT=setInterval(()=>{const e=$('#recT');if(e&&REC){const s=Math.floor((now()-REC.t0)/1000);e.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}},500);paintCompose()}catch(e){toast('Please allow microphone permissions to record audio.')}}
function recStop(cancel){if(!REC)return;REC.cancel=!!cancel;try{REC.mr.stop()}catch(e){REC=null;paintCompose()}}

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
ACT.newCall=()=>sheet(t('btn_new_call'),`<div class="list">${curUser().contacts.filter(c=>!c.ai&&!c.blocked).map(c=>`<div class="item">${av(c.name,'sm',colorOf(c.id))}<span class="grow">${esc(c.name)}</span><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Audio">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Video">${ic('video')}</button></div>`).join('')}</div>`);
ACT.call=el=>{const id=el.dataset.id||S.thread,kind=el.dataset.k,ct=contactOf(id);if(!ct||CALL)return;closeSheet();
  if(kind==='video'&&!ST().perm.camera)return toast(t('perm_camera_disabled'));
  const d=document.createElement('div');d.className='callscr';d.innerHTML=`<div class="who">${av(ct.name,'lg',colorOf(ct.id))}<h2>${esc(ct.name)}</h2><p id="callSt">Calling…</p></div><button class="endcall" data-act="endCall" aria-label="End call">${ic('phone')}</button>`;document.body.appendChild(d);
  CALL={el:d,stream:null,t:setTimeout(()=>{const s=$('#callSt');if(s)s.textContent='Call unavailable. Live streaming calls require an active WebRTC signaling gateway.'},3500)};
  if(kind==='video'&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)navigator.mediaDevices.getUserMedia({video:true}).then(s=>{if(!CALL){s.getTracks().forEach(tTr=>tTr.stop());return}CALL.stream=s;const v=document.createElement('video');v.muted=true;v.autoplay=true;v.playsInline=true;v.srcObject=s;d.prepend(v)}).catch(()=>{});
  curUser().calls.unshift({id:uid('c'),contactId:id,kind,ts:now(),res:'Not answered'});save()};
ACT.endCall=()=>{if(!CALL)return;clearTimeout(CALL.t);if(CALL.stream)CALL.stream.getTracks().forEach(tTr=>tTr.stop());CALL.el.remove();CALL=null;if(S.view==='chat'&&S.ct==='calls'&&!S.thread)paintChatBody()};
ACT.addStatus=()=>sheet(t('lbl_add_status'),`<form class="form" data-form="status"><label class="lab">Write your status<textarea class="field" name="text" maxlength="140"></textarea></label><div class="row wrap">${BGS.map((b,i)=>`<label class="radio"><input type="radio" name="bg" value="${i}" ${i===0?'checked':''} aria-label="Color ${i+1}"><span style="width:1.6rem;height:1.6rem;border-radius:50%;background:${b};display:inline-block"></span></label>`).join('')}</div><div class="row"><button type="button" class="btn ghost sm" data-act="stImg">${ic('image')} Photos</button><span id="stName" class="muted small"></span></div><button class="btn">Post status</button></form><p class="muted small" style="margin-top:.6rem">Status updates disappear after 24 hours.</p>`);
let STIMG=null;
ACT.stImg=async()=>{const f=await pickFile('image/*');if(!f)return;try{STIMG=await imgToData(f,800,.7);$('#stName').textContent=f.name}catch(e){toast('Could not read image.')}};
FORM.status=f=>{const textVal=fv(f,'text').trim();if(!textVal&&!STIMG)return toast('Write a status or choose a photo.');const u=curUser();u.statuses.push({id:uid('st'),by:'me',text:textVal,bg:+(f.querySelector('input[name=bg]:checked')||{value:0}).value,img:STIMG,ts:now()});STIMG=null;save();closeSheet();paintChatBody()};
ACT.viewStatus=el=>{const s=curUser().statuses.find(x=>x.id===el.dataset.id);if(!s)return;const d=document.createElement('div');d.className='view-stat';d.style.background=BGS[s.bg||0];d.setAttribute('role','dialog');d.setAttribute('aria-label','Status');d.innerHTML=`${s.img&&safeSrc(s.img)?`<img src="${safeSrc(s.img)}" alt="Status">`:''}${s.text?`<p>${esc(s.text)}</p>`:''}<button class="icon-btn" style="position:absolute;top:1rem;right:1rem;color:#fff" aria-label="Close">${ic('x')}</button>`;const c=()=>{clearTimeout(tm);d.remove()};d.onclick=c;const tm=setTimeout(c,6000);document.body.appendChild(d)};
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
  <div class="srow"><span>${t('st_lang_label')}</span><select class="field" data-set="lang" data-src="st" aria-label="Language / Lugha"><option value="en" ${s.lang==='en'?'selected':''}>English (Default)</option><option value="sw" ${s.lang==='sw'?'selected':''}>Kiswahili</option></select></div>

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

/* ============ about ============ */
VIEWS.about=()=>`<div class="view about" style="max-width:720px"><h2>${t('about_title')}</h2>
  <p>${t('about_desc')}</p>
  <h3>${t('about_goal_title')}</h3><ul><li>${t('about_goal_1')}</li><li>${t('about_goal_2')}</li><li>${t('about_goal_3')}</li><li>${t('about_goal_4')}</li></ul>
  <h3>${t('about_dev_title')}</h3><p>${t('about_dev_desc')}</p>
  <p class="muted">${t('about_services')}</p>
  <p class="note" style="margin-top:1.4rem">${t('about_version')}</p></div>`;

/* ============ events ============ */
document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el)return;const f=ACT[el.dataset.act];if(f)f(el,e)});
const _go=ACT.go;ACT.go=el=>{if(el.dataset.v==='chat')S.thread=null;_go(el)};
document.addEventListener('submit',e=>{const f=e.target.closest('form[data-form]');if(!f)return;e.preventDefault();const h=FORM[f.dataset.form];if(h)h(f)});
document.addEventListener('change',e=>{const tEl=e.target;if(tEl.dataset&&tEl.dataset.set)setPref(tEl)});
document.addEventListener('input',e=>{const tEl=e.target;
  if(tEl.tagName==='TEXTAREA'&&(tEl.id==='aiText'||tEl.id==='msgText')){tEl.style.height='auto';tEl.style.height=Math.min(tEl.scrollHeight,140)+'px'}
  if(tEl.id==='msgText'){const has=!!tEl.value.trim();$('#sendBtn').classList.toggle('hidden',!has);$('#micBtn').classList.toggle('hidden',has)}
  if(tEl.id==='cq'){S.cq=tEl.value;$('#clist').innerHTML=chatList()}
  if(tEl.id==='chq'){S.chq=tEl.value;$('#chlist').innerHTML=chList(tEl.value.toLowerCase())}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();return}
  if(e.key==='Enter'&&!e.shiftKey&&e.target.tagName==='TEXTAREA'){if(e.target.id==='aiText'){e.preventDefault();aiSend()}else if(e.target.id==='msgText'){e.preventDefault();ACT.thSend()}}});
if(/^#post=/.test(location.hash)){S.stream.focus=decodeURIComponent(location.hash.slice(6));S.view='stream'}

render();
})();
