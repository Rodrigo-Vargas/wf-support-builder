<div class="form-group">
   <label for=""><?php echo $custom_field->display_name ?></label>
   <input type="text" name="<?php echo 'wf_support_builder_fields[' . $custom_field->name . ']' ?>" value="<?php echo $custom_fields_values->{$custom_field->name} ?>">
</div>