<?php 

class WFSupportBuilderModel
{
   public int $ID;
   public string $slug;
   public string $name;
   public string $excerpt;
   public string $permalink;
   public string $thumbnail_url;
   public stdClass $custom_fields;

   function __construct( $wp_post )
   {
      $this->ID = $wp_post->ID;
      $this->slug = $wp_post->post_name;
      $this->name = $wp_post->post_title;
      $this->excerpt = get_the_excerpt($wp_post);
      $this->permalink = get_the_permalink($wp_post);
      $this->thumbnail_url = get_the_post_thumbnail_url($wp_post);

     /*
         name
         slug
         description     
     */

      $post_type_config = WFSupportBuilderConfig::get_instance()->get_post_type_config($wp_post->post_type);
     
      if ($post_type_config != null && isset($post_type_config->taxonomies))
      {
         foreach($post_type_config->taxonomies as $taxonomy)
         {
            $this->{$taxonomy->name} = wp_get_post_terms($wp_post->ID, $taxonomy->name);
         }         
      }      

      $custom_fields_value = get_post_meta( $wp_post->ID, 'wf_support_builder_custom_fields', true );

      $custom_fields = json_decode($custom_fields_value);

      if ($custom_fields === null) {
         $custom_fields = new stdClass();
      }
      $this->custom_fields = $custom_fields;
   }
}