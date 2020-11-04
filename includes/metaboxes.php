<?php

class WFSupportBuilderMetaboxes {
   public static $instance;

   public function register($current_post_type)
   {
      $config = WFSupportBuilderConfig::get_instance()->get();

      foreach($config->post_types as $post_type)
      {
         if ($post_type->name !== $current_post_type)
            continue;
         
         add_meta_box(
            'wfservices_box_id',
            'Informações Adicionais',
            array($this, 'build_custom_field_html'),
            null,
            'advanced',
            'default',
            array($post_type->custom_fields)
         );
      }      
   }

   public function build_custom_field_html($post, $context)
   {
      $custom_fields_values_string = get_post_meta( $post->ID, 'wf_support_builder_custom_fields', true );
      
      $custom_fields_values = json_decode($custom_fields_values_string);

      foreach($context['args'][0] as $custom_field)
      {
         include WF_SUPPORT_BUILDER_PATH . '/views/metaboxes/field.php';
      }      
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderMetaboxes))
         self::$instance = new WFSupportBuilderMetaboxes();

      return self::$instance;
   }
}

$metaboxes = WFSupportBuilderMetaboxes::get_instance();