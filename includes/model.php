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
   }
}