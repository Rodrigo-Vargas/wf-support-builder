const { Component } = wp.element;

const { MediaPlaceholder } = wp.blockEditor;

class Gallery extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: [],
         name: props.name
      };

      this.onImageSelected = this.onImageSelected.bind(this);
   }
   
   onImageSelected(media) {
      let images = this.state.images;
      images.push({
         url: media.url,
         id: media.id,
         title: media.title
      });

      this.setState({
         images
      }, () => {
         document.querySelector(`[name="${this.state.name}"]`).value = JSON.stringify(this.state.images);
      });
   }

   render() {
      const images = this.state.images.map(image => {
         return(
            <div className="uploaded-image">
               <img src={ image.url } alt={ image.title } />
            </div>
         )
      });

      return (
         <div>
            <MediaPlaceholder onSelect={ this.onImageSelected } />
            { images }
         </div>
      );
   }
}

var galleries = document.querySelectorAll('[data-media-field]');

for(var x = 0; x < galleries.length; x++)
   ReactDOM.render(<Gallery name={ galleries[x].querySelector('.gallery-data').name } />, galleries[x].querySelector('.component'));