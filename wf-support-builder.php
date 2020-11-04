<?php 
/**
 * Plugin Name: Waterfall Support Builder
 * Plugin URI:  https://rodrigovargas.com.br/waterfall-support-builder
 * Version:     1.0.0
 * Author:      Rodrigo Vargas
 * Author URI:  https://rodrigovargas.com.br
 * Text Domain: wf-support-builder
*/

define( 'WF_SUPPORT_BUILDER_PATH', plugin_dir_path( __FILE__ ) );
define( 'WF_SUPPORT_BUILDER_PLUGIN_NAME', 'WFSupportBuilder' );
define( 'WF_SUPPORT_BUILDER_DOMAIN', 'wf-support-builder' );
define( 'WF_SUPPORT_BUILDER_URL', plugins_url('', __FILE__ ) );
define( 'WF_SUPPORT_BUILDER_SLUG', 'wf_support_builder' );

class WFSupportBuilderPlugin {
   public static $instance;

   function __construct()
   {
      $this->require_files();
      $this->register_options();
   }

   function require_files()
   {
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/admin-menu.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/blocks.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/config.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/hooks.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/metaboxes.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/model.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/post-types.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/settings.php';
      require_once WF_SUPPORT_BUILDER_PATH . 'includes/store.php';
   }

   function register_options()
   {
      add_option('wf_support_builder_config', '' , '', 'yes');
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderPlugin))
         self::$instance = new WFSupportBuilderPlugin();

      return self::$instance;
   }
}

$gallery = WFSupportBuilderPlugin::get_instance();