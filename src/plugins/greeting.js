export default function greeting() {
    let d = new Date();
    let h = d.getHours();
    if (h >= 6 && h < 12) {
      return "greeting.morning";
    } else if (h >= 12 && h < 17) {
      return "greeting.afternoon";
    } else {
      return "greeting.evening"
    }
}