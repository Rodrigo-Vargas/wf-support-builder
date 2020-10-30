<?php 

class WFSupportBuilderConfig {
   public static $instance;

   public function get() {      
      $config = get_option( 'wf_support_builder_config' );

      return json_decode($config);
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderConfig))
         self::$instance = new WFSupportBuilderConfig();

      return self::$instance;
   }
}

$post_types = WFSupportBuilderConfig::get_instance();