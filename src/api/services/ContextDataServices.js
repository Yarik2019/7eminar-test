import ofThe7eminarIpa from "../ofThe7eminarIpa";
class ContentDataServices {
  getData() {
    return ofThe7eminarIpa.get("/content/test_task_front/data.json");
  }
}

export default new ContentDataServices();
