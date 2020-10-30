<?php 

class WFSupportBuilderSettings {
   public static $instance;

   public function register()
   {
      register_setting( 'wf_support_builder_general', 'wf_support_builder_config');

      add_settings_section ( 
         'wf_support_builder_general', 
         'General',
         'WFSupportBuilderSettings::general_section_callback',
         'wf-support-builder-settings'    
      );

      add_settings_field (
         'wf_support_builder_config',
         'Config',
         'WFSupportBuilderSettings::config_field',
         'wf-support-builder-settings',
         'wf_support_builder_general'
      );
   }

   public static function general_section_callback() { }

   public static function support_builder_settings()
   {
      if ( !current_user_can( 'manage_options' ) )  {
        wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', WF_SUPPORT_BUILDER_DOMAIN ) );
     }

     include WF_SUPPORT_BUILDER_PATH . '/views/settings.php';
   }

   public static function config_field() {
      $config = get_option( 'wf_support_builder_config' );

      include WF_SUPPORT_BUILDER_PATH . '/views/settings-config-field.php';
  }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderSettings))
         self::$instance = new WFSupportBuilderSettings();

      return self::$instance;
   }
}

$settings = WFSupportBuilderSettings::get_instance();