<div class='wrap'>
    <h2>Settings</h2>
    <form method='post' action='options.php'>
        <?php            
            settings_fields( 'wf_support_builder_general' );
            do_settings_sections( 'wf-support-builder-settings' );
            submit_button();
        ?>
    </form>
</div>