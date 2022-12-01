export class connection {
  static async connect(url) {
    return await fetch(url)
      .then((resolve) => {
        return resolve.json();
      })
      .catch((reject) => {
        console.log("Could not connect to database", reject);
      });
  }
}
