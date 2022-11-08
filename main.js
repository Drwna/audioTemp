const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  HZRecorder.get(
    (res) => {
      console.log(res);
    },
    { sampleBits: 16, sampleRate: 8000 }
  );
});
