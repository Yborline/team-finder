export const preloadImages = (urls: string[]): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    let loadedCount = 0;
    const totalImages = urls.length;

    if (totalImages === 0) {
      resolve(); // Если нет изображений для загрузки
      return;
    }

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          resolve(); // Все изображения загружены
        }
      };

      img.onerror = () => {
        console.error(`Ошибка загрузки изображения: ${url}`);
        reject(new Error(`Failed to load image: ${url}`));
      };
    });
  });
};
