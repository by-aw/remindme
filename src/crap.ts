function randomNotification() {
  new Notification("Remind Me", {
    body: "Helloooo",
    icon: "/180.png",
  });
  setTimeout(randomNotification, 3000);
}
function handleNotificationRequest() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
}

/**function oldDialog() {
  return (
    <dialog id="newReminderDialog">
      <form>
        <section className="SectionRow">
          <button formMethod="dialog" className="CloseButton">
            <Close />
          </button>
          <h2>New reminder</h2>
        </section>
        <section>
          <label>Remind me</label>
          <Input placeholder="Do anything" />
        </section>
        <section>
          <label>When</label>
          <Input placeholder="At any time" type="datetime-local" />
        </section>
        <Button>Create</Button>
      </form>
    </dialog>
  );
}**/
