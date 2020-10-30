<?php 

class WFSupportBuilderAdminMenu {
   public static $instance;

   public function register_menu_items()
   {
      $menu_labels = array(
         array(
            'page_title' => sprintf( __( '%s Settings', WF_SUPPORT_BUILDER_DOMAIN ), WF_SUPPORT_BUILDER_PLUGIN_NAME ),
            'menu_title' => __( 'WF Support Builder', WF_SUPPORT_BUILDER_DOMAIN ),
         )
      );

      $capability = 'manage_options';

      add_submenu_page(
         'options-general.php',
         $menu_labels[0]['page_title'],
         $menu_labels[0]['menu_title'],
         $capability, 'wf-support-builder-settings',
         array( 'WFSupportBuilderSettings', 'support_builder_settings' )
      );
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderAdminMenu))
         self::$instance = new WFSupportBuilderAdminMenu();

      return self::$instance;
   }
}
$hooks = WFSupportBuilderAdminMenu::get_instance();