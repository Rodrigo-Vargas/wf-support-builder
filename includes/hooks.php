<?php 

class WFSupportBuilderHooks {
   public static $instance;
   
   function __construct()
   {
      add_action( 'init', array( $this, 'wf_init' ) );
      add_action( 'admin_menu', array( $this, 'wf_admin_menu' ) );
      add_action( 'admin_init', array( $this, 'wf_admin_init' ) );
   }

   function wf_admin_init()
   {
      WFSupportBuilderSettings::get_instance()->register();  
   }

   function wf_init()
   {
      WFSupportBuilderPostTypes::get_instance()->register();
   }

   function wf_admin_menu()
   {
      WFSupportBuilderAdminMenu::get_instance()->register_menu_items();
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderHooks))
         self::$instance = new WFSupportBuilderHooks();

      return self::$instance;
   }
}

$hooks = WFSupportBuilderHooks::get_instance();