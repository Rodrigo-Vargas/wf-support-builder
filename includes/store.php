<?php 

class WFSupportBuilderStore {
   public static $instance;

   public function get_all($post_type_name)
   {
      $args = array(
         'post_type'     => $post_type_name,
         'post_status'	 => array( 'publish', 'draft' ),
         'cache_results' => false,
         'nopaging'      => true,
      );

      $post_items = get_posts( $args );

      if ( empty( $post_items ) ) {
         return array();
      }

      $items = array();

      foreach ( $post_items as $post ) {
         $items[] = new WFSupportBuilderModel( $post );
      }

      return $items;
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderStore))
         self::$instance = new WFSupportBuilderStore();

      return self::$instance;
   }
}

$store = WFSupportBuilderStore::get_instance();