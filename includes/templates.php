<?php 

class WFSupportBuilderTemplates {
   public static $instance;

   public function get_all() {
      $templates = array();
      $possible_locations = $this->get_locations();

      foreach ( $possible_locations as $location ) {
         $path = trailingslashit( $location['path'] );

         foreach(glob($path.'/*.*') as $file) {
            $file_name = basename($file);
            $template_name = preg_replace("/\.php/", "", $file_name);
            array_push($templates, $template_name);
         }

         break;
      }

      return $templates;
   }   

   public function get_template_file($filename) {
      $located = false;

      $possible_locations = $this->get_locations();

      foreach ( $possible_locations as $location ) {
         $path = trailingslashit( $location['path'] );
         if ( file_exists( $path . $filename ) ) {
            $located = array(
               'path' => $path . $filename,
               'url'  => trailingslashit( $location['url'] ) . $filename
            );
            break;
         }
      }

      return $located;
   }

   private function get_locations() {
      $locations = array(
         10  => array(
            'path' => trailingslashit( get_template_directory() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG,
            'url'  => trailingslashit( get_template_directory_uri() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG 
         ),
         1000 => array(
            'path' => trailingslashit( WF_SUPPORT_BUILDER_PATH ) . 'templates',
            'url'  => trailingslashit( WF_SUPPORT_BUILDER_URL ) . 'templates'
         )
      );

      if ( is_child_theme() ) {
         $locations[1] = array(
            'path' => trailingslashit( get_stylesheet_directory() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG,
            'url'  => trailingslashit( get_stylesheet_directory_uri() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG 
         );
      }

      ksort( $locations, SORT_NUMERIC );

      return $locations;
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderTemplates))
         self::$instance = new WFSupportBuilderTemplates();

      return self::$instance;
   }
}

$post_types = WFSupportBuilderTemplates::get_instance();