<?php 

class WFSupportBuilderHooks {
   public static $instance;
   
   function __construct()
   {#
      add_action( 'init', array( $this, 'wf_init' ) );
      add_action( 'admin_menu', array( $this, 'wf_admin_menu' ) );
      add_action( 'add_meta_boxes', array($this,'wf_add_meta_boxes') );
      add_action( 'admin_init', array( $this, 'wf_admin_init' ) );
      add_action( 'enqueue_block_editor_assets', array( $this, 'wf_enqueue_block_editor_assets' ) );
      add_action( 'save_post', array($this, 'wf_save_post') );
   }

   function wf_admin_init()
   {
      WFSupportBuilderSettings::get_instance()->register();  
   }

   function wf_init()
   {
      WFSupportBuilderPostTypes::get_instance()->register();
      WFSupportBuilderBlocks::get_instance()->register_block();      
   }

   function wf_admin_menu()
   {
      WFSupportBuilderAdminMenu::get_instance()->register_menu_items();
   }

   function wf_add_meta_boxes($post_type)
   {
      WFSupportBuilderMetaboxes::get_instance()->register($post_type); 
   }

   function wf_enqueue_block_editor_assets()
   {
      WFSupportBuilderBlocks::get_instance()->enqueue_list_block_assets(); 
   }   

   function wf_save_post( $post_id )
   {
      WFSupportBuilderPostTypes::get_instance()->handle_save_post( $post_id ); 
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderHooks))
         self::$instance = new WFSupportBuilderHooks();

      return self::$instance;
   }
}

$hooks = WFSupportBuilderHooks::get_instance();