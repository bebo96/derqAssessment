//This api method will post detection data to db  
export const saveDetection = (detectionData) => {
  return fetch('/api/savedetection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(detectionData),
  });
};