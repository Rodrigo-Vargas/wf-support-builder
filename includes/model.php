<?php 

class WFSupportBuilderModel
{
   function __construct( $wp_post )
   {
      $this->ID = $wp_post->ID;
      $this->slug = $wp_post->post_name;
      $this->name = $wp_post->post_title;
      $this->excerpt = get_the_excerpt($wp_post);
      $this->permalink = get_the_permalink($wp_post);
      $this->thumbnail_url = get_the_post_thumbnail_url($wp_post);

      $custom_fields_value = get_post_meta( $wp_post->ID, 'wf_support_builder_custom_fields', true );

      $custom_fields = json_decode($custom_fields_value);

      $this->custom_fields = $custom_fields;

      foreach($custom_fields as $key => $value)
         $this->{$key} = $custom_fields->{$key};
   }
}