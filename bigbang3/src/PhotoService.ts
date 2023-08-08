export class PhotoService {
    getPhotos() {
      return [
        { source: 'photo1.jpg', alt: 'Description for Photo 1', title: 'Title 1' },
        { source: 'photo2.jpg', alt: 'Description for Photo 2', title: 'Title 2' },
        // Add more photos as needed
      ];
    }
  }
  