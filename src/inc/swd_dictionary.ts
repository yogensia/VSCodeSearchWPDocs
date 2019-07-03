/*

MIT License

Copyright(c) 2018 — 2019 Yogensia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

'use strict';

/**
 * Check if given string is a known function name.
 * @param functionName string Function to check for.
 */
export function isFunction(functionName: string) {
  const wpFunctions = [
    "get_usernumposts",
    "do_action",
    "timer_stop",
    "get_approved_comments",
    "add_option",
    "delete_option",
    "get_rss",
    "get_theme_data",
    "update_option",
    "get_settings",
    "form_option",
    "wp_create_user",
    "get_userdata",
    "add_filter",
    "get_currentuserinfo",
    "get_all_category_ids",
    "fetch_rss",
    "add_action",
    "wp_rss",
    "wptexturize",
    "wpautop",
    "wp_reschedule_event",
    "wp_insert_post",
    "wp_clear_scheduled_hook",
    "wp_unschedule_event",
    "wp_next_scheduled",
    "wp_schedule_event",
    "wp_schedule_single_event",
    "get_tag_link",
    "get_categories",
    "wp_enqueue_script",
    "get_option",
    "is_taxonomy",
    "get_post",
    "is_user_logged_in",
    "plugin_basename",
    "wp_mail",
    "remove_action",
    "do_action_ref_array",
    "did_action",
    "remove_filter",
    "merge_filters",
    "apply_filters",
    "force_balance_tags",
    "wp_redirect",
    "register_activation_hook",
    "register_deactivation_hook",
    "wp_get_attachment_url",
    "wp_kses",
    "cat_is_ancestor_of",
    "get_category_feed_link",
    "username_exists",
    "get_comment",
    "get_post_custom_keys",
    "get_post_custom",
    "get_post_custom_values",
    "auth_redirect",
    "email_exists",
    "add_post_meta",
    "update_post_meta",
    "delete_post_meta",
    "get_post_meta",
    "wp_delete_attachment",
    "wp_count_posts",
    "check_admin_referer",
    "wp_verify_nonce",
    "wp_create_nonce",
    "wp_insert_attachment",
    "is_front_page",
    "is_single",
    "is_home",
    "is_paged",
    "is_page",
    "is_page_template",
    "is_search",
    "is_404",
    "is_archive",
    "is_category",
    "is_tag",
    "is_author",
    "is_date",
    "is_year",
    "is_month",
    "is_day",
    "is_time",
    "is_attachment",
    "is_admin",
    "is_preview",
    "is_feed",
    "is_trackback",
    "comments_open",
    "pings_open",
    "wp_update_post",
    "get_bookmark",
    "get_children",
    "wp_remote_fopen",
    "wp_delete_post",
    "get_pages",
    "wp_login",
    "mysql2date",
    "register_sidebars",
    "dynamic_sidebar",
    "register_sidebar_widget",
    "unregister_sidebar_widget",
    "register_widget_control",
    "unregister_widget_control",
    "unregister_sidebar",
    "is_active_widget",
    "is_dynamic_sidebar",
    "get_current_theme",
    "get_page_by_title",
    "get_terms",
    "wp_upload_dir",
    "wp_get_attachment_image",
    "wp_get_attachment_image_src",
    "is_email",
    "attribute_escape",
    "get_page",
    "post_meta_Function_Examples",
    "get_category_by_slug",
    "wp_attachment_is_image",
    "get_page_by_path",
    "check_comment",
    "wp_register_sidebar_widget",
    "get_post_mime_type",
    "get_post_type",
    "get_extended",
    "wp_publish_post",
    "get_all_page_ids",
    "get_page_uri",
    "get_attached_file",
    "update_attached_file",
    "is_local_attachment",
    "wp_get_attachment_metadata",
    "wp_update_attachment_metadata",
    "wp_get_attachment_thumb_file",
    "wp_get_attachment_thumb_url",
    "wp_mime_type_icon",
    "wp_check_for_changed_slugs",
    "wp_get_post_categories",
    "wp_set_post_categories",
    "get_profile",
    "set_current_user",
    "wp_set_current_user",
    "get_userdatabylogin",
    "validate_username",
    "wp_insert_user",
    "page_uri_index",
    "get_page_children",
    "wp_get_recent_posts",
    "wp_get_single_post",
    "wp_trim_excerpt",
    "get_the_content",
    "wp_update_user",
    "get_lastcommentmodified",
    "sanitize_comment_cookies",
    "wp_allow_comment",
    "wp_delete_comment",
    "wp_get_comment_status",
    "wp_get_current_commenter",
    "wp_insert_comment",
    "register_taxonomy",
    "wp_filter_comment",
    "get_category",
    "wp_signon",
    "wp_throttle_comment_flood",
    "wp_new_comment",
    "wp_set_comment_status",
    "wp_update_comment",
    "wp_update_comment_count",
    "discover_pingback_server_uri",
    "do_all_pings",
    "do_trackbacks",
    "generic_ping",
    "pingback",
    "privacy_ping_filter",
    "weblog_ping",
    "do_enclose",
    "add_ping",
    "get_enclosed",
    "get_pung",
    "get_to_ping",
    "trackback_url_list",
    "trackback",
    "get_stylesheet",
    "get_stylesheet_directory",
    "get_stylesheet_directory_uri",
    "get_stylesheet_uri",
    "get_locale_stylesheet_uri",
    "get_template",
    "get_template_directory_uri",
    "get_themes",
    "get_theme",
    "get_theme_root",
    "get_theme_root_uri",
    "get_query_template",
    "get_404_template",
    "get_archive_template",
    "get_author_template",
    "get_category_template",
    "get_date_template",
    "get_home_template",
    "get_page_template",
    "get_paged_template",
    "get_search_template",
    "get_single_template",
    "get_attachment_template",
    "get_comments_popup_template",
    "load_template",
    "locale_stylesheet",
    "preview_theme",
    "preview_theme_ob_filter",
    "preview_theme_ob_filter_callback",
    "validate_current_theme",
    "switch_theme",
    "get_theme_mod",
    "set_theme_mod",
    "get_header_textcolor",
    "get_header_image",
    "header_image",
    "add_custom_image_header",
    "get_gmt_from_date",
    "get_date_from_gmt",
    "iso8601_timezone_to_offset",
    "iso8601_to_datetime",
    "human_time_diff",
    "date_i18n",
    "get_weekstartend",
    "get_lastpostdate",
    "get_lastpostmodified",
    "is_new_day",
    "is_comments_popup",
    "is_plugin_page",
    "get_category_by_path",
    "get_tags",
    "get_cat_name",
    "get_tag",
    "is_taxonomy_hierarchical",
    "get_term_by",
    "is_term",
    "wp_get_object_terms",
    "do_feed",
    "do_feed_rdf",
    "do_feed_rss",
    "do_feed_rss2",
    "do_feed_atom",
    "get_bloginfo_rss",
    "bloginfo_rss",
    "get_the_title_rss",
    "the_title_rss",
    "the_content_rss",
    "the_excerpt_rss",
    "comment_link",
    "get_comment_link",
    "get_comment_author_rss",
    "comment_author_rss",
    "comment_text_rss",
    "get_post_comments_feed_link",
    "get_the_category_rss",
    "the_category_rss",
    "rss_enclosure",
    "get_search_feed_link",
    "get_search_comments_feed_link",
    "clean_pre",
    "seems_utf8",
    "wp_specialchars",
    "utf8_uri_encode",
    "is_sticky",
    "is_singular",
    "remove_accents",
    "sanitize_file_name",
    "sanitize_user",
    "sanitize_title_with_dashes",
    "convert_chars",
    "balanceTags",
    "format_to_edit",
    "zeroise",
    "backslashit",
    "trailingslashit",
    "untrailingslashit",
    "addslashes_gpc",
    "antispambot",
    "make_clickable",
    "wp_rel_nofollow",
    "convert_smilies",
    "wp_iso_descrambler",
    "popuplinks",
    "sanitize_email",
    "ent2ncr",
    "wp_richedit_pre",
    "clean_url",
    "htmlentities2",
    "js_escape",
    "wp_make_link_relative",
    "add_magic_quotes",
    "wp_kses_hook",
    "wp_kses_split",
    "wp_kses_split2",
    "wp_kses_attr",
    "wp_kses_hair",
    "wp_kses_check_attr_val",
    "wp_kses_bad_protocol",
    "wp_kses_no_null",
    "wp_kses_stripslashes",
    "wp_kses_array_lc",
    "wp_kses_js_entities",
    "wp_kses_html_error",
    "wp_kses_bad_protocol_once",
    "wp_kses_bad_protocol_once2",
    "wp_kses_normalize_entities",
    "wp_kses_normalize_entities2",
    "wp_kses_decode_entities",
    "wp_filter_kses",
    "wp_filter_post_kses",
    "wp_filter_nohtml_kses",
    "get_term_children",
    "previous_comments_link",
    "format_to_post",
    "wp_kses_version",
    "maybe_serialize",
    "maybe_unserialize",
    "is_serialized",
    "is_serialized_string",
    "get_alloptions",
    "get_user_option",
    "update_user_option",
    "xmlrpc_getposttitle",
    "xmlrpc_getpostcategory",
    "xmlrpc_removepostdata",
    "user_pass_ok",
    "get_locale",
    "_2",
    "_e",
    "load_textdomain",
    "load_plugin_textdomain",
    "load_theme_textdomain",
    "spawn_cron",
    "wp_cron",
    "wp_get_schedules",
    "wp_get_schedule",
    "make_url_footnote",
    "wp_get_http_headers",
    "remove_query_arg",
    "wp",
    "status_header",
    "nocache_headers",
    "cache_javascript_headers",
    "get_num_queries",
    "bool_from_yn",
    "do_robots",
    "is_blog_installed",
    "wp_nonce_url",
    "wp_nonce_field",
    "wp_referer_field",
    "wp_original_referer_field",
    "wp_get_referer",
    "wp_get_original_referer",
    "wp_mkdir_p",
    "wp_upload_bits",
    "wp_check_filetype",
    "wp_explain_nonce",
    "wp_nonce_ays",
    "wp_die",
    "check_ajax_referer",
    "wp_get_cookie_login",
    "wp_setcookie",
    "wp_clearcookie",
    "wp_notify_postauthor",
    "wp_notify_moderator",
    "wp_salt",
    "wp_hash",
    "next_comments_link",
    "load_default_textdomain",
    "wp_set_object_terms",
    "register_sidebar",
    "image_downsize",
    "add_query_arg",
    "funky_javascript_fix",
    "get_author_feed_link",
    "get_cat_ID",
    "get_page_hierarchy",
    "paginate_comments_links",
    "paginate_links",
    "sanitize_title",
    "stripslashes_deep",
    "wp_delete_user",
    "wp_enqueue_style",
    "get_term",
    "clean_comment_cache",
    "wp_transition_comment_status",
    "locate_template",
    "translate",
    "wp_set_auth_cookie",
    "wp_clear_auth_cookie",
    "sanitize_term",
    "wp_hash_password",
    "is_wp_error",
    "get_query_var",
    "wp_check_password",
    "clean_page_cache",
    "clean_post_cache",
    "_transition_post_status",
    "language_attributes",
    "term_description",
    "get_the_author",
    "get_header",
    "get_footer",
    "get_sidebar",
    "get_bookmarks",
    "is_active_sidebar",
    "file_is_displayable_image",
    "get_the_time",
    "get_day_link",
    "get_month_link",
    "get_year_link",
    "get_calendar",
    "get_template_directory",
    "get_comments",
    "wp_register",
    "wp_lostpassword_url",
    "wp_logout_url",
    "wp_loginout",
    "wp_login_url",
    "in_category",
    "get_the_tag_list",
    "get_the_category",
    "get_category_parents",
    "get_category_link",
    "wp_insert_category",
    "wp_register_style",
    "wp_update_term",
    "fetch_feed",
    "post_comments_feed_link",
    "get_the_term_list",
    "add_settings_field",
    "add_settings_section",
    "unregister_setting",
    "do_shortcode",
    "add_shortcode",
    "shortcode_atts",
    "wp_insert_term",
    "remove_shortcode",
    "remove_all_shortcodes",
    "strip_shortcodes",
    "get_post_ancestors",
    "wp_logout",
    "get_bloginfo",
    "is_plugin_active",
    "esc_attr",
    "wp_add_dashboard_widget",
    "get_avatar",
    "wp_delete_term",
    "wp_reset_query",
    "get_shortcode_regex",
    "get_page_link",
    "get_the_excerpt",
    "get_object_taxonomies",
    "wp_generate_attachment_metadata",
    "esc_attr_e",
    "wp_set_post_terms",
    "wp_set_post_tags",
    "wp_create_category",
    "get_the_ID",
    "plugins_url",
    "_c",
    "register_post_type",
    "register_taxonomy_for_object_type",
    "is_ssl",
    "wp_parse_args",
    "shortcode_parse_atts",
    "add_theme_support",
    "count_user_posts",
    "count_many_users_posts",
    "count_users",
    "wp_nav_menu",
    "wp_login_form",
    "wp_get_current_user",
    "has_filter",
    "trackback_rdf",
    "trackback_url",
    "get_post_types",
    "url_to_postid",
    "wp_get_post_tags",
    "wp_head",
    "wp_footer",
    "remove_meta_box",
    "get_user_meta",
    "get_post_thumbnail_id",
    "add_editor_style",
    "it:get_query_var",
    "esc_attr_2",
    "term_exists",
    "taxonomy_exists",
    "post_type_exists",
    "get_file_data",
    "add_post_type_support",
    "register_admin_color_schemes",
    "wp_admin_css_color",
    "register_nav_menu",
    "register_nav_menus",
    "wp_oembed_get",
    "wp_register_script",
    "current_theme_supports",
    "add_image_size",
    "add_role",
    "wp_localize_script",
    "add_custom_background",
    "get_plugin_data",
    "_get_plugin_data_markup_translate",
    "_cleanup_header_comment",
    "author_can",
    "is_super_admin",
    "current_user_can",
    "wp_insert_link",
    "remove_theme_support",
    "register_widget",
    "unregister_widget",
    "update_user_meta",
    "get_term_link",
    "get_users_of_blog",
    "is_tax",
    "has_excerpt",
    "in_the_loop",
    "get_previous_post",
    "has_action",
    "has_tag",
    "post_password_required",
    "get_post_type_capabilities",
    "post_type_supports",
    "capital_P_dangit",
    "create_empty_blog",
    "wpmu_create_blog",
    "get_post_type_object",
    "get_current_site",
    "get_current_site_name",
    "post_type_archive_title",
    "get_post_type_archive_link",
    "get_post_type_archive_feed_link",
    "is_post_type_archive",
    "the_terms",
    "is_multisite",
    "wp_get_post_terms",
    "grant_super_admin",
    "revoke_super_admin",
    "get_the_terms",
    "wp_deregister_script",
    "get_user_by",
    "wp_safe_redirect",
    "get_blog_post",
    "add_contextual_help",
    "current_filter",
    "remove_all_filters",
    "get_adjacent_post",
    "get_next_post",
    "wp_delete_category",
    "get_author_posts_url",
    "remove_all_actions",
    "settings_fields",
    "do_shortcode_tag",
    "get_tag_template",
    "get_taxonomy_template",
    "header_textcolor",
    "register_theme_directory",
    "remove_theme_mod",
    "remove_theme_mods",
    "require_if_theme_supports",
    "search_theme_directories",
    "get_site_option",
    "_x",
    "is_main_site",
    "admin_notice_feed",
    "avoid_blog_page_permalink_collision",
    "check_import_new_users",
    "check_upload_size",
    "choose_primary_blog",
    "confirm_delete_users",
    "dashboard_quota",
    "display_space_usage",
    "format_code_lang",
    "get_site_allowed_themes",
    "get_space_allowed",
    "get_upload_space_available",
    "is_upload_space_available",
    "ms_deprecated_blogs_file",
    "mu_dropdown_languages",
    "new_user_email_admin_notice",
    "redirect_user_to_blog",
    "refresh_user_details",
    "secret_salt_warning",
    "send_confirmation_on_profile_email",
    "show_post_thumbnail_warning",
    "site_admin_notice",
    "sync_category_tag_slugs",
    "update_option_new_admin_email",
    "update_user_status",
    "upload_size_limit_filter",
    "upload_space_setting",
    "wpmu_delete_blog",
    "wpmu_delete_user",
    "wpmu_get_blog_allowedthemes",
    "_admin_notice_multisite_activate_plugins_page",
    "add_user_to_blog",
    "wp_count_comments",
    "get_post_format",
    "get_boundary_post",
    "rewind_posts",
    "wp_iframe",
    "wp_get_nav_menu_items",
    "is_plugin_active_for_network",
    "is_rtl",
    "add_menu_page",
    "add_submenu_page",
    "remove_post_type_support",
    "have_comments",
    "is_subdomain_install",
    "do_settings_sections",
    "set_post_thumbnail_size",
    "has_category",
    "get_user_by_email",
    "add_options_page",
    "wp_handle_upload",
    "url_shorten",
    "checked",
    "selected",
    "disabled",
    "user_can",
    "get_body_class",
    "show_admin_bar",
    "get_users",
    "esc_textarea",
    "get_current_user_id",
    "set_post_format",
    "has_post_format",
    "get_post_format_link",
    "get_post_format_string",
    "unregister_nav_menu",
    "has_nav_menu",
    "comments_template",
    "get_next_posts_link",
    "get_previous_posts_link",
    "wp_script_is",
    "wp_style_is",
    "remove_role",
    "do_settings_fields",
    "update_post_caches",
    "update_post_cache",
    "register_default_headers",
    "unregister_default_headers",
    "wp_html_excerpt",
    "update_comment_meta",
    "get_page_templates",
    "edit_post",
    "add_meta_box",
    "get_role",
    "it:add_filter",
    "delete_user_meta",
    "add_user_meta",
    "request_filesystem_credentials",
    "add_metadata",
    "flush_rewrite_rules",
    "edit_user",
    "get_blog_details",
    "is_multi_author",
    "sanitize_post_field",
    "remove_custom_image_header",
    "wp_deregister_style",
    "wp_dequeue_style",
    "current_user_can_for_blog",
    "get_super_admins",
    "map_meta_cap",
    "add_blog_option",
    "delete_blog_option",
    "get_blogaddress_by_domain",
    "get_blogaddress_by_id",
    "get_blogaddress_by_name",
    "get_blog_option",
    "get_blog_status",
    "get_id_from_blogname",
    "get_last_updated",
    "is_archived",
    "refresh_blog_details",
    "restore_current_blog",
    "switch_to_blog",
    "update_archived",
    "update_blog_details",
    "update_blog_option",
    "wp_get_sidebars_widgets",
    "wp_get_widget_defaults",
    "remove_submenu_page",
    "remove_menu_page",
    "add_management_page",
    "set_post_thumbnail",
    "have_posts",
    "is_post_type_hierarchical",
    "_n",
    "_ex",
    "_nx",
    "_n_noop",
    "_nx_noop",
    "translate_nooped_plural",
    "esc_html",
    "add_settings_error",
    "get_settings_errors",
    "settings_errors",
    "wp_unregister_GLOBALS",
    "the_post",
    "wp_reset_postdata",
    "set_transient",
    "get_transient",
    "delete_transient",
    "_get_list_table",
    "remove_cap",
    "add_cap",
    "get_sample_permalink",
    "post_slug_meta_box",
    "wp_check_browser_version",
    "wp_clone",
    "get_screen_icon",
    "download_url",
    "wp_http_supports",
    "wp_templating_constants",
    "get_posts_by_author_sql",
    "delete_metadata",
    "get_metadata",
    "update_metadata",
    "wp_authenticate",
    "wp_validate_auth_cookie",
    "wp_generate_auth_cookie",
    "wp_parse_auth_cookie",
    "wp_sanitize_redirect",
    "wp_validate_redirect",
    "wp_password_change_notification",
    "wp_nonce_tick",
    "wp_rand",
    "wp_set_password",
    "wp_text_diff",
    "wp_unregister_sidebar_widget",
    "wp_set_sidebars_widgets",
    "wp_register_widget_control",
    "wp_unregister_widget_control",
    "wp_convert_widget_settings",
    "wp_widget_description",
    "wp_remote_head",
    "wp_remote_request",
    "wp_remote_retrieve_header",
    "wp_remote_retrieve_headers",
    "wp_remote_retrieve_response_code",
    "wp_remote_retrieve_response_message",
    "wp_list_pluck",
    "get_the_category_by_ID",
    "get_the_category_list",
    "get_post_type_labels",
    "get_bookmark_field",
    "get_adjacent_post_rel_link",
    "domain_exists",
    "insert_blog",
    "get_admin_url",
    "sanitize_term_field",
    "get_search_link",
    "install_blog",
    "wp_kses_data",
    "set_current_screen",
    "get_intermediate_image_sizes",
    "wp_count_terms",
    "is_child_theme",
    "wp_kses_post",
    "get_dirsize",
    "esc_html_e",
    "menu_page_url",
    "wpmu_signup_user_notification",
    "redirect_this_site",
    "wp_meta",
    "get_user_id_from_string",
    "is_comment_feed",
    "add_comment_meta",
    "is_user_spammy",
    "unzip_file",
    "wp_defer_term_counting",
    "get_allowed_mime_types",
    "get_submit_button",
    "ms_not_installed",
    "wpmu_welcome_user_notification",
    "force_ssl_content",
    "update_blog_public",
    "delete_user_option",
    "global_terms",
    "wpmu_create_user",
    "ms_upload_constants",
    "get_active_blog_for_user",
    "users_can_register_signup_filter",
    "send_nosniff_header",
    "is_blog_user",
    "wpmu_signup_user",
    "newblog_notify_siteadmin",
    "unload_textdomain",
    "get_admin_users_for_domain",
    "welcome_user_msg_filter",
    "is_email_address_unsafe",
    "wpmu_update_blogs_date",
    "debug_fwrite",
    "debug_fopen",
    "wp_read_image_metadata",
    "wp_check_php_mysql_versions",
    "clear_global_post_cache",
    "wp_suspend_cache_invalidation",
    "wp_defer_comment_counting",
    "absint",
    "wp_is_post_revision",
    "build_query",
    "get_media_item",
    "get_media_items",
    "wp_maintenance",
    "esc_url",
    "plugin_dir_path",
    "wp_constrain_dimensions",
    "wp_count_attachments",
    "wp_match_mime_types",
    "wp_post_mime_type_where",
    "media_handle_upload",
    "_wp_relative_upload_path",
    "get_image_tag",
    "wp_load_image",
    "image_constrain_size_for_editor",
    "image_get_intermediate_size",
    "image_hwstring",
    "image_make_intermediate_size",
    "image_resize",
    "image_resize_dimensions",
    "is_random_header_image",
    "get_random_header_image",
    "wp_unique_post_slug",
    "get_post_field",
    "setup_postdata",
    "get_hidden_meta_boxes",
    "_wp_post_thumbnail_html",
    "force_ssl_login",
    "force_ssl_admin",
    "the_author_posts_link",
    "plugin_dir_url",
    "urlencode_deep",
    "wp_parse_str",
    "screen_icon",
    "wp_check_filetype_and_ext",
    "get_theme_support",
    "do_meta_boxes",
    "wp_editor",
    "is_main_query",
    "get_current_screen",
    "media_sideload_image",
    "media_handle_sideload",
    "wp_trim_words",
    "register_post_status",
    "delete_site_transient",
    "set_site_transient",
    "get_site_transient",
    "get_dashboard_blog",
    "get_most_recent_post_of_user",
    "redirect_canonical",
    "redirect_guess_404_permalink",
    "esc_attr_x",
    "esc_html_2",
    "esc_html_x",
    "remove_node",
    "get_nodes",
    "get_node",
    "add_group",
    "wp_delete_post_revision",
    "url_is_accessable_via_ssl",
    "wp_filter_object_list",
    "wp_list_filter",
    "get_theme_mods",
    "wp_debug_mode",
    "add_comments_page",
    "add_pages_page",
    "add_media_page",
    "add_links_page",
    "add_plugins_page",
    "add_posts_page",
    "add_theme_page",
    "add_users_page",
    "add_dashboard_page",
    "wp_scheduled_delete",
    "esc_url_raw",
    "is_plugin_inactive",
    "save_mod_rewrite_rules",
    "wp_magic_quotes",
    "get_allowed_themes",
    "add_site_option",
    "delete_site_option",
    "update_site_option",
    "wp_initial_constants",
    "is_admin_bar_showing",
    "has_term",
    "get_objects_in_term",
    "get_current_blog_id",
    "get_the_modified_time",
    "get_post_modified_time",
    "get_default_post_to_edit",
    "clean_term_cache",
    "es:wp_login_url",
    "get_field_name",
    "get_theme_feature_list",
    "install_themes_feature_list",
    "is_blog_admin",
    "remove_editor_styles",
    "tag_escape",
    "update_user_cache",
    "wp_unique_filename",
    "wp_unique_term_slug",
    "wp_reset_vars",
    "timer_start",
    "wp_terms_checklist",
    "get_the_modified_date",
    "check_theme_switched",
    "wp_favicon_request",
    "wp_trash_post",
    "$post",
    "_get_meta_sql",
    "add_object_page",
    "current_time",
    "add_permastruct",
    "add_utility_page",
    "delete_comment_meta",
    "get_ancestors",
    "get_comment_reply_link",
    "edit_term_link",
    "get_option('siteurl')",
    "get_plugins",
    "get_queried_object",
    "get_taxonomy",
    "is_object_in_taxonomy",
    "is_object_in_term",
    "is_post",
    "register_importer",
    "remove_custom_background",
    "require_wp_db",
    "sanitize_key",
    "sanitize_text_field",
    "submit_button",
    "update_blog_status",
    "wp_array_slice_assoc",
    "wp_basename",
    "wp_generate_password",
    "wp_get_shortlink",
    "wp_old_slug_redirect",
    "wp_get_theme",
    "sanitize_html_class",
    "load_child_theme_textdomain",
    "get_blogs_of_user",
    "wp_add_inline_style",
    "get_background_color",
    "background_color",
    "get_background_image",
    "background_image",
    "wp_get_themes",
    "esc_js",
    "get_comment_date",
    "is_network_admin",
    "get_user_count",
    "wp_delete_object_term_relationships",
    "_return_false",
    "is_nav_menu",
    "sticky_class",
    "sanitize_mime_type",
    "sanitize_option",
    "sanitize_title_for_query",
    "sanitize_sql_orderby",
    "get_blog_count",
    "validate_file",
    "register_uninstall_hook",
    "apply_filters_ref_array",
    "like_escape",
    "esc_sql",
    "sanitize_meta",
    "add_meta",
    "get_the_tags",
    "get_blog_permalink",
    "user_can_richedit",
    "wp_load_alloptions",
    "wp_remote_get",
    "wp_remote_retrieve_body",
    "get_comment_author",
    "wp_blacklist_check",
    "wp_update_comment_count_now",
    "get_comment_ID",
    "get_comment_time",
    "get_comment_pages_count",
    "wp_handle_sideload",
    "get_registered_nav_menus",
    "wp_clean_themes_cache",
    "wp_embed_defaults",
    "wp_embed_unregister_handler",
    "wp_cache_set",
    "get_post_status",
    "wp_enqueue_media",
    "get_post_statuses",
    "get_post_stati",
    "wp_dashboard_quota",
    "maybe_redirect_404",
    "ms_cookie_constants",
    "ms_file_constants",
    "ms_subdomain_constants",
    "add_existing_user_to_blog",
    "add_new_user_to_blog",
    "check_upload_mimes",
    "filter_SSL",
    "fix_import_form_size",
    "fix_phpmailer_messageid",
    "newuser_notify_siteadmin",
    "recurse_dirsize",
    "wp_install_defaults",
    "install_blog_defaults",
    "is_user_member_of_blog",
    "is_user_option_local",
    "maybe_add_existing_user_to_blog",
    "remove_user_from_blog",
    "signup_nonce_check",
    "signup_nonce_fields",
    "update_posts_count",
    "upload_is_file_too_big",
    "wpmu_activate_signup",
    "wpmu_log_new_registrations",
    "wpmu_signup_blog",
    "wpmu_signup_blog_notification",
    "wpmu_validate_blog_signup",
    "wpmu_validate_user_signup",
    "wpmu_welcome_notification",
    "ms_site_check",
    "wpmu_current_site",
    "wp_new_user_notification",
    "the_content_feed",
    "get_the_content_feed",
    "delete_post_thumbnail",
    "remove_menu",
    "get_tax_sql",
    "get_meta_sql",
    "get_search_form",
    "post_submit_meta_box",
    "get_page_template_slug",
    "_return_true",
    "_return_zero",
    "wp_create_nav_menu",
    "wp_add_id3_tag_data",
    "wp_read_video_metadata",
    "wp_read_audio_metadata",
    "wp_nav_menu_disabled_check",
    "do_accordion_sections",
    "wp_slash",
    "wp_unslash",
    "wp_is_writable",
    "wp_auth_check_load",
    "wp_auth_check",
    "get_tag_regex",
    "wp_registration_url",
    "wp_heartbeat_settings",
    "wp_mediaelement_fallback",
    "wp_get_audio_extensions",
    "wp_audio_shortcode",
    "wp_get_video_extensions",
    "wp_video_shortcode",
    "wp_embed_handler_audio",
    "wp_embed_handler_video",
    "get_attached_media",
    "get_post_galleries",
    "get_post_galleries_images",
    "get_post_gallery",
    "get_post_gallery_images",
    "wp_post_revision_title_expanded",
    "paginate_content",
    "get_paged_content",
    "wp_revisions_enabled",
    "wp_revisions_to_keep",
    "wp_text_diff_with_count",
    "shortcode_exists",
    "has_shortcode",
    "wp_remove_object_terms",
    "wp_add_object_terms",
    "post_preview",
    "wp_convert_bytes_to_hr",
    "size_format",
    "gallery_shortcode",
    "user_trailingslashit",
    "calendar_week_mod",
    "the_feed_link",
    "get_template_part",
    "get_feed_link",
    "wp_transition_post_status",
    "_wp_post_revision_fields",
    "comment_class",
    "home_url",
    "export_wp",
    "get_editable_roles",
    "wp_dropdown_roles",
    "get_comment_meta",
    "wp_strip_all_tags",
    "wp_remote_post",
    "wp_category_checklist",
    "number_format_i18n",
    "wp_get_post_parent_id",
    "wp_check_invalid_utf8",
    "add_screen_option",
    "wp_dequeue_script",
    "wp_extract_urls",
    "_return_empty_array",
    "_return_empty_string",
    "_return_null",
    "wp_get_post_revision",
    "wp_trash_post_comments",
    "wp_star_rating",
    "register_new_user",
    "ms_is_switched",
    "wp_get_sites",
    "wp_get_post_revisions",
    "get_edit_term_link",
    "wp_is_post_autosave",
    "activate_plugin",
    "remove_image_size",
    "has_image_size",
    "deactivate_plugins",
    "get_post_taxonomies",
    "wp_is_large_network",
    "register_meta",
    "wp_normalize_path",
    "get_comment_author_url_link",
    "get_archives_link",
    "get_sitestats",
    "get_comment_excerpt",
    "get_comment_type",
    "fa_load_plugin_textdomain",
    "get_shortcut_link",
    "set_query_var",
    "load_muplugin_textdomain",
    "has_header_image",
    "wp_encode_emoji",
    "wp_cache_delete",
    "the_posts_pagination",
    "get_the_posts_pagination",
    "is_customize_preview",
    "add_term_meta",
    "update_term_meta",
    "wp_update_nav_menu_item",
    "get_admin_page_title",
    "wp_widgets_init"
  ];

  if (wpFunctions.includes(functionName)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Check if given string is a known Hook name.
 * @param functionName string Hook to check for.
 */
export function isHook(hookName: string) {
  const wpHooks = [
    "_admin_menu",
    "activate_(plugin_file_name)",
    "activated_plugin",
    "activity_box_end",
    "add_attachment",
    "add_meta_boxes",
    "added_(meta_type)_meta",
    "admin_enqueue_scripts",
    "admin_footer",
    "admin_footer-(hookname)",
    "admin_footer-(plugin_page)",
    "admin_head",
    "admin_head-(plugin_page)",
    "admin_menu",
    "admin_notices",
    "admin_page_access_denied",
    "admin_post_(action)",
    "admin_print_scripts",
    "admin_print_styles",
    "after_setup_theme",
    "after_switch_theme",
    "before_delete_post",
    "bulk_edit_custom_box",
    "comment_(old_status)_to_(new_status)",
    "comment_form",
    "comment_post",
    "current_screen",
    "customize_controls_enqueue_scripts",
    "deactivate_blog",
    "deactivated_plugin",
    "delete_attachment",
    "delete_post",
    "delete_user",
    "deleted_user",
    "dynamic_sidebar",
    "edit_terms",
    "edit_user_profile",
    "edit_user_profile_update",
    "edited_$taxonomy",
    "edited_terms",
    "get_footer",
    "get_header",
    "grant_super_admin",
    "in_admin_footer",
    "init",
    "load_textdomain",
    "load-(page)",
    "load-themes.php",
    "login_enqueue_scripts",
    "login_head",
    "manage_$post_type_posts_custom_column",
    "manage_pages_custom_column",
    "manage_posts_custom_column",
    "muplugins_loaded",
    "network_admin_notices",
    "parse_query",
    "parse_request",
    "password_reset",
    "personal_options",
    "personal_options_update",
    "plugins_loaded",
    "post_submitbox_misc_actions",
    "post_updated",
    "posts_selection",
    "pre_category_description",
    "pre_get_posts",
    "pre_post_update",
    "pre_term_description",
    "profile_personal_options",
    "profile_update",
    "publish_future_post",
    "quick_edit_custom_box",
    "register_form",
    "register_post",
    "registered_taxonomy",
    "revoke_super_admin",
    "right_now_content_table_end",
    "rss2_item",
    "save_post",
    "send_headers",
    "set_user_role",
    "show_user_profile",
    "shutdown",
    "sidebar_admin_page",
    "sidebar_admin_setup",
    "switch_theme",
    "the_post",
    "trash_post",
    "untrash_post",
    "updated_(meta_type)_meta",
    "upgrader_process_complete",
    "upload_files_(tab)",
    "user_register",
    "wp",
    "wp_after_admin_bar_render",
    "wp_ajax_nopriv_(action)",
    "wp_authenticate",
    "wp_dashboard_setup",
    "wp_enqueue_scripts",
    "wp_footer",
    "wp_head",
    "wp_insert_comment",
    "wp_insert_post",
    "wp_loaded",
    "wp_login",
    "wp_logout",
    "wp_meta",
    "wp_print_scripts",
    "wp_print_styles",
    "wp_register_sidebar_widget",
    "wpmu_new_blog",
    "wpmu_new_user",
    "generate_rewrite_rules",
    "edit_terms",
    "cron_schedules",
    "comment_author",
    "mce_css",
    "attachment_icon",
    "the_content_rss",
    "excerpt_length",
    "pre_comment_user_ip",
    "wp_insert_post_data",
    "excerpt_more",
    "custom_menu_order",
    "menu_order",
    "locale",
    "allowed_redirect_hosts",
    "the_content_feed",
    "upload_mimes",
    "user_has_cap",
    "category_feed_link",
    "posts_distinct",
    "pre_option_(option_name)",
    "the_editor",
    "wp_redirect_status",
    "posts_join",
    "manage_edit-post_type_columns",
    "body_class",
    "wp_title",
    "pre_comment_approved",
    "schedule_event",
    "login_head",
    "wp_feed_cache_transient_lifetime",
    "manage_$post_type_posts_columns",
    "manage_posts_columns",
    "post_edit_form_tag",
    "post_limits",
    "posts_clauses",
    "user_registration_email",
    "wp_list_pages",
    "wp_list_pages_excludes",
    "nav_menu_css_class",
    "image_resize_dimensions",
    "widget_categories_args",
    "attachment_fields_to_save",
    "query_vars",
    "tiny_mce_before_init",
    "widget_pages_args",
    "login_body_class",
    "registration_errors",
    "wp_authenticate_user",
    "authenticate",
    "the_permalink",
    "sanitize_title",
    "sanitize_option_$option",
    "sanitize_user",
    "upload_dir",
    "wp_handle_upload_prefilter",
    "contactmethods",
    "content_edit_pre",
    "excerpt_edit_pre",
    "attachment_fields_to_edit",
    "date_edit_pre",
    "date_gmt_edit_pre",
    "title_edit_pre",
    "status_edit_pre",
    "password_edit_pre",
    "modified_edit_pre",
    "modified_gmt_edit_pre",
    "content_filtered_edit_pre",
    "parent_edit_pre",
    "type_edit_pre",
    "mime_type_edit_pre",
    "get_pung",
    "get_to_ping",
    "get_the_guid",
    "get_the_excerpt",
    "category_rewrite_rules",
    "root_rewrite_rules",
    "$permastruct_rewrite_rules",
    "rewrite_rules_array",
    "author_rewrite_rules",
    "comments_rewrite_rules",
    "search_rewrite_rules",
    "date_rewrite_rules",
    "page_rewrite_rules",
    "post_rewrite_rules",
    "found_posts",
    "self_link",
    "get_comments_link",
    "comments_link_feed",
    "comment_link",
    "nav_menu_link_attributes",
    "wp_revisions_to_keep",
    "wp_link_pages",
    "search_form_format",
    "user_search_columns",
    "wp_http_accept_encoding",
    "widget_meta_poweredby",
    "posts_groupby",
    "post_type_link",
    "manage_pages_columns",
    "preprocess_comment",
    "type_template",
    "post_link",
    "editable_roles",
    "image_size_names_choose",
    "content_save_pre",
    "user_contactmethods",
    "plugin_action_links_(plugin_file_name)",
    "img_caption_shortcode",
    "bulk_post_updated_messages",
    "pre_update_option_(option_name)",
    "update_(meta_type)_metadata",
    "post_gallery",
    "plugin_row_meta",
    "author_edit_pre",
    "manage_users_columns",
    "term_link",
    "ajax_query_attachments_args",
    "get_image_tag_class",
    "posts_search",
    "comments_array",
    "wp_link_query_args",
    "embed_defaults",
    "author_link",
    "default_page_template_title",
    "shortcut_link",
    "get_the_date",
    "run_wptexturize",
    "login_errors",
    "sanitize_key",
    "get_(meta_type)_metadata",
    "pre_kses",
    "protected_title_format",
    "private_title_format",
    "widgets_init"
  ];

  if (wpHooks.includes(hookName)) {
    return true;
  } else {
    return false;
  }
}