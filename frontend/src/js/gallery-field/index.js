const { Component } = wp.element;

const { MediaPlaceholder } = wp.blockEditor;

class Gallery extends Component {
   constructor(props) {
      super(props);

      var imagesHiddenField = document.querySelector(`[name="${props.name}"]`);

      this.state = {
         images: imagesHiddenField.value ? JSON.parse(imagesHiddenField.value) : [],
         name: props.name
      };

      this.onImageSelected = this.onImageSelected.bind(this);
      this.removeImage = this.removeImage.bind(this);
      this.handleError = this.handleError.bind(this);
   }
   
   onImageSelected(media) {
      let images = this.state.images;

      if (media.url.indexOf("blob:") < 0) {

         // Remove one loading item
         const selectedIndex = images.findIndex((element) => element.loading);

         images.splice(selectedIndex, 1);

         images.push({
            url: media.url,
            id: media.id,
            title: media.title
         });   
      }
      else {
         images.push({
            loading: true
         })
      }

      this.setState({
         images
      }, () => {
         document.querySelector(`[name="${this.state.name}"]`).value = JSON.stringify(this.state.images);
      });
   }

   removeImage(imageID) {
      if (!confirm('Deseja remover esta imagem?'))
         return;

      let images = this.state.images.filter(image => {
         return image.id !== imageID;
      });

      this.setState({
         images
      }, () => {
         document.querySelector(`[name="${this.state.name}"]`).value = JSON.stringify(this.state.images);
      });
   }

   handleError(props) {
      alert("Error!");
      console.log(props);
   }

   render() {
      const images = this.state.images.map(image => {
         if (image.loading)
            return (
               <div class="loading">
                  <span>Aguarde, carregando Imagem...</span>
               </div>
            );
         else
            return (
               <div className="thumbnail">
                  <img src={ image.url } alt={ image.title } />
                  <div className="btn-remove-image">
                     <a href="#" class="dashicons dashicons-trash" onClick={ () => this.removeImage(image.id) }></a>
                  </div>
               </div>
            );
      });

      return (
         <div>            
            <div className="uploaded-images">
               { images }
            </div>

            <MediaPlaceholder onSelect={ this.onImageSelected } handleError={ this.onError } onSelectUrl={ this.onImageUrlSelected } />
         </div>
      );
   }
}

var galleries = document.querySelectorAll('[data-media-field]');

for(var x = 0; x < galleries.length; x++)
   ReactDOM.render(<Gallery name={ galleries[x].querySelector('.gallery-data').name } />, galleries[x].querySelector('.component'));