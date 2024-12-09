import { createClient } from 'contentful';

// Configure Contentful client
const client = createClient({
  space: '5s49h0j4unuq',
  accessToken: '2R2-6HMnMtiouX_Y--vulQVWcKXhATlcChu1SUrnO3g', 
});

// Fetch Parents
export const fetchParents = async () => {
  const response = await client.getEntries({ content_type: 'parents' });
  console.log('Full Response:', response.items); 
  return response.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.nameOfBothParents,
    images: item.fields.picturesOfDogParentsTogether?.map((picture) => picture.fields.file.url) || [],
    description: item.fields.descriptionOfDogParents,
    litterDoB: item.fields.litterDoBOrExpectedBirthingDate,
  }));
};


// Fetch Puppies
export const fetchPuppies = async () => {
  try {
    const response = await client.getEntries({ content_type: 'puppy' }); 
    return response.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.puppyName,
      parentIds: item.fields.parent?.map((parent) => parent.sys.id) || [], 
      images: item.fields.puppyPictures?.map((picture) => picture.fields.file.url) || [], 
      available: item.fields.available, 
      gender: item.fields.sexOfPuppy ? 'Male' : 'Female',
    }));
  } catch (error) {
    console.error('Error fetching puppies:', error);
    throw error;
  }
};
