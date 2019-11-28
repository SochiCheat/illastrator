/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session;

    /* */ jsonData = {"reactions": [{"body": "Create an envelpe icon with a satin feel | Artistic Inspirations AiVault graphic design blog http://bit.ly/cMSuFG", "author_name": "artsstock", "source_url": "http://www.ubervu.com/conversations/www.aivault.com/%3Fp%3D154", "id": 28752019, "get_service_url": "http://twitter.com/", "title": "Create an envelpe icon with a satin feel | Artistic Inspirations AiVault graphic design blog http://bit.ly/cMSuFG", "url": "http://twitter.com/artsstock/status/10315065020", "source": "ubervu", "get_service_name": "twitter", "avatar_url": "http://a1.twimg.com/profile_images/673472426/angry-01_normal.png", "author_url": "", "date_created": "8 months ago", "retweets": []}, {"body": "Easy to follow instructions leaves no questions unanswered. ", "author_name": "PigFox", "source_url": "http://www.ubervu.com/conversations/www.aivault.com/%3Fp%3D154", "id": 28752016, "get_service_url": "http://disqus.com/", "title": "", "url": "http://buzz.yahoo.com/article/1:bb83fb8840861523c3863e87a001bab8:ee096ebc1233a36bace498419c674932/Create-an-envelpe-icon-with-a-satin-feel#6502574", "source": "ubervu", "get_service_name": "unknown", "avatar_url": "http://a323.yahoofs.com/coreid/4aa1e5e5ie4azul7sp1/QOD.BZkhcqEON3uJC9M-/102/tn48.jpg?ciA4aFLBFuq3SAVQ", "author_url": "", "date_created": "1 year ago", "retweets": []}, {"body": "http://edcsd.org Create an envelpe icon with a satin feel : http://bit.ly/1an7DY\n &lt;- elearning links", "author_name": "eDCSD", "source_url": "http://www.ubervu.com/conversations/www.aivault.com/%3Fp%3D154", "id": 28752017, "get_service_url": "http://twitter.com/", "title": "http://edcsd.org Create an envelpe icon with a satin feel : http://bit.ly/1an7DY\n &lt;- elearning links", "url": "http://twitter.com/eDCSD/status/3776237038", "source": "ubervu", "get_service_name": "twitter", "avatar_url": "http://a1.twimg.com/profile_images/311719496/Large_Logo.jpg-1_normal.jpg", "author_url": "", "date_created": "1 year ago", "retweets": []}, {"body": "Create an envelpe icon with a satin feel http://bit.ly/HQdt1 That's by now guys, I going for a coffee!", "author_name": "Lukelux", "source_url": "http://www.ubervu.com/conversations/www.aivault.com/%3Fp%3D154", "id": 28752018, "get_service_url": "http://twitter.com/", "title": "Create an envelpe icon with a satin feel http://bit.ly/HQdt1 That's by now guys, I going for a coffee!", "url": "http://twitter.com/Lukelux/status/2763034493", "source": "ubervu", "get_service_name": "twitter", "avatar_url": "http://s3.amazonaws.com/twitter_production/profile_images/219395808/myphoto_normal.jpg", "author_url": "", "date_created": "1 year ago", "retweets": []}], "has_more_reactions": false, "users": {"asmaamurad": {"username": "asmaamurad", "tumblr": "", "display_name": "asmaamurad", "url": "http://disqus.com/asmaamurad/", "registered": true, "linkedin": "", "blog": "", "remote_domain": "", "points": 1, "facebook": "http://www.facebook.com/asmaamurad", "avatar": "http://mediacdn.disqus.com/uploads/users/297/8657/avatar32.jpg?1274333130", "delicious": "", "is_remote": false, "verified": true, "flickr": "", "twitter": "http://twitter.com/one8edegree", "remote_domain_name": ""}, "31f612aeae383d8ec76a695cdd1d6d0b": {"username": "Vlhagen", "tumblr": "", "display_name": "Vlhagen", "url": "http://disqus.com/guest/31f612aeae383d8ec76a695cdd1d6d0b/", "registered": false, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1289542154/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}}, "forum": {"use_media": false, "avatar_size": 32, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": true, "streaming_realtime": false, "reply_position": false, "default_avatar_url": "http://mediacdn.disqus.com/1289542154/images/noavatar32.png", "template": {"mobile": {"url": "http://mediacdn.disqus.com/1289542154/build/themes/newmobile.js", "css": "http://mediacdn.disqus.com/1289542154/build/themes/newmobile.css"}, "url": "http://mediacdn.disqus.com/1289542154/build/themes/narcissus.js?1289542347", "name": "Narcissus", "css": "http://mediacdn.disqus.com/1289542154/build/themes/narcissus.css?1289542347"}, "max_depth": 0, "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "show_avatar": true, "reactions_enabled": true, "disqus_auth_disabled": false, "name": "Art Inspires Aivault Vector Freebies", "language": "en", "url": "aivault", "allow_anon_post": true, "thread_votes_disabled": false, "moderate_all": true}, "realtime_enabled": false, "request": {"sort": 4, "has_unmerged_users": false, "is_authenticated": false, "subscribe_on_post": 0, "missing_perm": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "email": "", "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2010-11-12_21:52:59", "is_moderator": false, "forum": "aivault", "is_initial_load": true, "display_username": "", "points": null, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "ordered_posts": [65878086, 65975282], "realtime_paused": false, "posts": {"65975282": {"up_voted": false, "ip": "", "last_modified_date": null, "has_replies": false, "is_first_child": true, "vote": false, "message": "I have used illustrator to create this but you can create something similar here is the link<br><a href=\"http://www.articulate.com/rapid-elearning/see-how-easily-you-can-create-graphics-in-powerpoint\" rel=\"nofollow\">http://www.articulate.com/rapid-elearning/see-how-easily-you-can-create-graphics-in-powerpoint</a>/", "is_last_child": true, "can_reply": true, "down_voted": false, "real_date": "2010-08-04_01:01:26", "killed": false, "highlighted": false, "user_key": "asmaamurad", "has_been_anonymized": false, "edited": false, "author_is_moderator": true, "from_request_user": false, "user_voted": null, "votable": true, "date": "3 months ago", "approved": true, "num_replies": 0, "last_modified_by": null, "email": "", "parent_post_id": 65878086, "depth": 1, "points": 0, "author_is_creator": true, "is_realtime": false}, "65878086": {"up_voted": false, "ip": "", "last_modified_date": null, "has_replies": true, "is_first_child": false, "vote": false, "message": "What tool, and what version did you use? I have ppt 2003 and don't have the tools you show.", "is_last_child": false, "can_reply": true, "down_voted": false, "real_date": "2010-08-03_13:31:11", "killed": false, "highlighted": false, "user_key": "31f612aeae383d8ec76a695cdd1d6d0b", "has_been_anonymized": false, "edited": false, "author_is_moderator": false, "from_request_user": null, "user_voted": null, "votable": true, "date": "3 months ago", "approved": true, "num_replies": 1, "last_modified_by": null, "email": "", "parent_post_id": null, "depth": 0, "points": 0, "author_is_creator": false, "is_realtime": false}}, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "thread": {"voters_count": 0, "offset_posts": 0, "slug": "create_an_envelpe_icon_with_a_satin_feel", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {}, "total_posts": 2, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 0, "num_posts": 2, "closed": false, "per_page": 0, "id": 94084735, "killed": false, "moderate_all": false}, "reactions_limit": 10, "context": {"show_reply": true, "use_fb_connect": true, "active_switches": ["slim_paginator", "new_importer", "community_icon", "show_captcha_on_links"], "forum_facebook_key": "3cd33a855bab4f5183ddd828c77fe5c4", "use_yahoo": true, "subscribed": false, "use_twitter_signin": true, "use_openid": true, "realtime_speed": 15000, "switches": {"overview_trending_threads": false, "easy_xdm": false, "bespin": false, "slim_paginator": true, "show_captcha_on_links": true, "debug_js": false, "ssl_auth": false, "embed_sdk_loader": false, "ssl": false, "new_importer": true, "community_icon": true, "v4_templates": false, "auto_blacklist_spammers": false, "enable_random_recommendations": false}}, "ready": true, "mediaembed": [], "reactions_start": 0, "settings": {"read_only": false, "realtime_url": "http://disqus.com/forums/realtime.js", "minify_js": true, "debug": false, "disqus_url": "http://disqus.com", "uploads_url": "http://media.disqus.com/uploads", "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "media_url": "http://mediacdn.disqus.com/1289542154"}, "media_url": "http://mediacdn.disqus.com/1289542154"}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    DISQUS.lang.extend(DISQUS.settings, DISQUS.jsonData.settings);
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    reply: 'http://aivault.disqus.com/thread/create_an_envelpe_icon_with_a_satin_feel/reply.html',
    stats: 'http://aivault.disqus.com/stats.html',
    edit: 'http://aivault.disqus.com/embed/editcomment.html',
    embed_edit: 'http://disqus.com/embed/edit.html',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1289542154/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://aivault.disqus.com/_auth/embed/remote_settings/',
    embed_thread: 'http://aivault.disqus.com/thread.js',
    embed_profile: 'http://disqus.com/embed/profile.js',
    embed_vote: 'http://aivault.disqus.com/vote.js',
    embed_thread_vote: 'http://aivault.disqus.com/thread_vote.js',
    embed_thread_share: 'http://aivault.disqus.com/thread_share.js',
    embed_login: 'http://disqus.com/embed/login.html',
    embed_report: 'http://aivault.disqus.com/thread/create_an_envelpe_icon_with_a_satin_feel/post_report/',
    embed_queueurl: 'http://aivault.disqus.com/queueurl.js',
    embed_hidereaction: 'http://aivault.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://aivault.disqus.com/more_reactions.js',
    embed_subscribe: 'http://aivault.disqus.com/subscribe.js',
    embed_highlight: 'http://aivault.disqus.com/highlight.js',
    embed_kill: 'http://aivault.disqus.com/kill.js',
    embed_block: 'http://aivault.disqus.com/block.js',
    toggle_thread_killed: 'http://aivault.disqus.com/toggle_thread_killed.js',
    toggle_thread_closed: 'http://aivault.disqus.com/toggle_thread_closed.js',
    update_moderate_all: 'http://aivault.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://aivault.disqus.com/update_days_alive.js',
    show_user_votes: 'http://aivault.disqus.com/show_user_votes.js',
    report_spam: 'http://aivault.disqus.com/reportspam.js',
    forum_view: 'http://aivault.disqus.com/create_an_envelpe_icon_with_a_satin_feel',
    get_comment_message: 'http://aivault.disqus.com/get_comment_message.js',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://aivault.disqus.com/thread/create_an_envelpe_icon_with_a_satin_feel/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    tweetbox_frame: 'http://disqus.com/forums/integrations/twitter/tweetbox.html',
    community: 'http://aivault.disqus.com/community.html',
    admin: 'http://aivault.disqus.com/admin/moderate/',
    moderate: 'http://aivault.disqus.com/admin/moderate/',
    moderate_threads: 'http://aivault.disqus.com/admin/moderate-threads/',
    settings: 'http://aivault.disqus.com/admin/settings/',
    embedFbAuth: 'http://disqus.com/forums/aivault/fbauth.html',
    embedSsoAuth: 'http://disqus.com/forums/aivault/sso_auth_frame.html',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/'
};
