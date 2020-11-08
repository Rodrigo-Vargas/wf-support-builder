const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import WFSupportBuilderListEdit from './edit';

registerBlockType('wf-support-builder/list', {
   title: __('List'),
   description: __('Insert custom post type lists items into your content'),
   icon: 'format-gallery',
   category: 'wf-support-builder',
   keywords: [
      __('list'),
   ],
   supports: {
      multiple: true,
      html: false
   },
   attributes: {
      className: {
         type: 'string'
      },
      itemsLimit: {
         type: 'number',
         default: 0
      },
      template: {
         type: 'string'
      },
      postTypeId: {
         type: 'string'
      }
   },

   edit(props) {
		return (<WFSupportBuilderListEdit {...props}/>)
	},

   save() {
      return null;
   },
});