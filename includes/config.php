<?php 

class WFSupportBuilderConfig {
   public static $instance;

   public function get() {      
      $config = get_option( 'wf_support_builder_config' );

      return json_decode($config);
   }

   public function get_post_type_config($post_type_name)
   {
      $config = $this->get();

      foreach($config->post_types as $post_type)
      {
         if ($post_type->name == $post_type_name)
         {
            return $post_type;
         }
      }

      return null;
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderConfig))
         self::$instance = new WFSupportBuilderConfig();

      return self::$instance;
   }
}

$post_types = WFSupportBuilderConfig::get_instance();