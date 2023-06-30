const mockResponse = {
  data: [
    {
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
      ],
      id: 1,
      name: 'Rocket 1',
      reserved: true,
    },
    {
      flickr_images: [
        'https://imgur.com/azYafd8.jpg',
      ],
      id: 2,
      name: 'Rocket 2',
      reserved: false,
    },
  ],
};

const axios = {
  create: jest.fn(() => axios),
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default axios;
