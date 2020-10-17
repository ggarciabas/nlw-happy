import Image from '../models/Image';

export default {
    render (image: Image) { // retorna o objeto 
        return {
                id: image.id,
                url: `https://nlw-happy.herokuapp.com/${image.path}`
            };
    },
    renderMany (images: Image[]) {
        return images.map(image => this.render(image))
    }
}