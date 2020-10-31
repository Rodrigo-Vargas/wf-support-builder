const { __ } = wp.i18n;
const { Component } = wp.element;
const {
   InspectorControls
} = wp.blockEditor || wp.editor;

const { PanelBody, TextControl, SelectControl  } = wp.components;

export default class WFServicesEdit extends Component {
   render() {
      const postTypes = wf_support_builder_global_variables.post_types.map( post_type => (
			{ value: post_type.name, label: post_type.display_name }
      ) );
      
      postTypes.unshift( { value: '', label: 'Select' } );

      const { attributes, className, setAttributes } = this.props;
      const { itemsLimit, postTypeId } = attributes;

      function selectPostType( value ) {
			setAttributes( { postTypeId: value } );
		}

      return (
         <div className={className}>
            WF Support Builder List
            <InspectorControls>
               <PanelBody>
                  <TextControl
                     label={__('Items limit', 'wf-support-builder')}
                     value={itemsLimit}
                     onChange={(value) => {
                        setAttributes({ itemsLimit: value });
                     }}
                  />

               <SelectControl
						label={ 'Post Type' }
						value={ postTypeId }
						options={ postTypes }
						onChange={ selectPostType }
					/>
               </PanelBody>
            </InspectorControls>
         </div>
      );
   }
}
WFServicesEdit.defaultProps = {}