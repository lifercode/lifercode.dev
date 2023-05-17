
export default function replaceWithBr(value:string) {
  return value.replace(/\n/g, "<br />")
}