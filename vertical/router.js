var express = require('express');
var router = express.Router();

// Dashboard
router.get('/', function (req, res) {
   res.render('Dashboard/dashboard1');
})

router.get('/index', function (req, res) {
   res.render('Dashboard/dashboard1');
})
router.get('/dashboard_2', function (req, res) {
   res.render('Dashboard/dashboard_2');
})

// Admin
router.get('/admin_lightbox', function (req, res) {
   res.render('Admin/admin_lightbox');
})
router.get('/admin_nestable', function (req, res) {
   res.render('Admin/admin_nestable');
})
router.get('/admin_range_slider', function (req, res) {
   res.render('Admin/admin_range_slider');
})
router.get('/admin_sweet_alert', function (req, res) {
   res.render('Admin/admin_sweet_alert');
})
router.get('/admin_tour', function (req, res) {
   res.render('Admin/admin_tour');
})
router.get('/admin_treeview', function (req, res) {
   res.render('Admin/admin_treeview');
})

// Apps
router.get('/apps_calendar', function (req, res) {
   res.render('Apps/apps_calendar');
})
router.get('/apps_contacts', function (req, res) {
   res.render('Apps/apps_contacts');
})
router.get('/apps_tickets', function (req, res) {
   res.render('Apps/apps_tickets');
})

// Charts
router.get('/charts_apex', function (req, res) {
   res.render('Charts/charts_apex');
})
router.get('/charts_bright', function (req, res) {
   res.render('Charts/charts_bright');
})
router.get('/charts_chartist', function (req, res) {
   res.render('Charts/charts_chartist');
})
router.get('/charts_chartjs', function (req, res) {
   res.render('Charts/charts_chartjs');
})
router.get('/charts_flot', function (req, res) {
   res.render('Charts/charts_flot');
})
router.get('/charts_knob', function (req, res) {
   res.render('Charts/charts_knob');
})
router.get('/charts_morris', function (req, res) {
   res.render('Charts/charts_morris');
})
router.get('/charts_peity', function (req, res) {
   res.render('Charts/charts_peity');
})
router.get('/charts_sparklines', function (req, res) {
   res.render('Charts/charts_sparklines');
})

// Email
router.get('/email_compose', function (req, res) {
   res.render('Email/email_compose');
})
router.get('/email_inbox', function (req, res) {
   res.render('Email/email_inbox');
})
router.get('/email_read', function (req, res) {
   res.render('Email/email_read');
})
router.get('/email_templates_action', function (req, res) {
   res.render('Email/email_templates_action');
})
router.get('/email_templates_alert', function (req, res) {
   res.render('Email/email_templates_alert');
})
router.get('/email_templates_billing', function (req, res) {
   res.render('Email/email_templates_billing');
})
router.get('/email_templates', function (req, res) {
   res.render('Email/email_templates');
})

// Extras

router.get('/extras_faqs', function (req, res) {
   res.render('Extras/extras_faqs');
})
router.get('/extras_invoice', function (req, res) {
   res.render('Extras/extras_invoice');
})
router.get('/extras_pricing', function (req, res) {
   res.render('Extras/extras_pricing');
})
router.get('/extras_profile', function (req, res) {
   res.render('Extras/extras_profile');
})
router.get('/extras_timeline', function (req, res) {
   res.render('Extras/extras_timeline');
})

// Forms
router.get('/forms_advanced', function (req, res) {
   res.render('Forms/forms_advanced');
})
router.get('/forms_elements', function (req, res) {
   res.render('Forms/forms_elements');
})
router.get('/forms_file_uploads', function (req, res) {
   res.render('Forms/forms_file_uploads');
})
router.get('/forms_masks', function (req, res) {
   res.render('Forms/forms_masks');
})
router.get('/forms_pickers', function (req, res) {
   res.render('Forms/forms_pickers');
})
router.get('/forms_quilljs', function (req, res) {
   res.render('Forms/forms_quilljs');
})
router.get('/forms_summernote', function (req, res) {
   res.render('Forms/forms_summernote');
})
router.get('/forms_validation', function (req, res) {
   res.render('Forms/forms_validation');
})
router.get('/forms_wizard', function (req, res) {
   res.render('Forms/forms_wizard');
})

// Icons
router.get('/icons_feather', function (req, res) {
   res.render('Icons/icons_feather');
})
router.get('/icons_font_awesome', function (req, res) {
   res.render('Icons/icons_font_awesome');
})
router.get('/icons_lineawesome', function (req, res) {
   res.render('Icons/icons_lineawesome');
})
router.get('/icons_mdi', function (req, res) {
   res.render('Icons/icons_mdi');
})
router.get('/icons_simple_line', function (req, res) {
   res.render('Icons/icons_simple_line');
})

// Layouts
router.get('/layouts_boxed', function (req, res) {
   res.render('Layouts/layouts_boxed');
})
router.get('/layouts_dark_topbar', function (req, res) {
   res.render('Layouts/layouts_dark_topbar');
})
router.get('/layouts_light_sidebar', function (req, res) {
   res.render('Layouts/layouts_light_sidebar');
})
router.get('/layouts_preloader', function (req, res) {
   res.render('Layouts/layouts_preloader');
})
router.get('/layouts_sidebar_collapsed', function (req, res) {
   res.render('Layouts/layouts_sidebar_collapsed');
})
router.get('/layouts_sidebar_sm', function (req, res) {
   res.render('Layouts/layouts_sidebar_sm');
})

// Maps
router.get('/maps_google', function (req, res) {
   res.render('Maps/maps_google');
})
router.get('/maps_mapael', function (req, res) {
   res.render('Maps/maps_mapael');
})
router.get('/maps_vector', function (req, res) {
   res.render('Maps/maps_vector');
})

// Pages
router.get('/pages_404_alt', function (req, res) {
   res.render('Pages/pages_404_alt');
})
router.get('/pages_starter', function (req, res) {
   res.render('Pages/pages_starter');
})

// Tables
router.get('/tables_basic', function (req, res) {
   res.render('Tables/tables_basic');
})
router.get('/tables_datatables', function (req, res) {
   res.render('Tables/tables_datatables');
})
router.get('/tables_editable', function (req, res) {
   res.render('Tables/tables_editable');
})
router.get('/tables_responsive', function (req, res) {
   res.render('Tables/tables_responsive');
})
router.get('/tables_tablesaw', function (req, res) {
   res.render('Tables/tables_tablesaw');
})

// Ui
router.get('/ui_buttons', function (req, res) {
   res.render('Ui/ui_buttons');
})
router.get('/ui_cards', function (req, res) {
   res.render('Ui/ui_cards');
})
router.get('/ui_general', function (req, res) {
   res.render('Ui/ui_general');
})
router.get('/ui_grid', function (req, res) {
   res.render('Ui/ui_grid');
})
router.get('/ui_modals', function (req, res) {
   res.render('Ui/ui_modals');
})
router.get('/ui_notifications', function (req, res) {
   res.render('Ui/ui_notifications');
})
router.get('/ui_progress', function (req, res) {
   res.render('Ui/ui_progress');
})
router.get('/ui_tabs_accordions', function (req, res) {
   res.render('Ui/ui_tabs_accordions');
})
router.get('/ui_typography', function (req, res) {
   res.render('Ui/ui_typography');
})

// Widgets
router.get('/widgets', function (req, res) {
   res.render('Widgets/widgets');
})

module.exports = router;