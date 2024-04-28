export default function MyDoodle() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
  <css-doodle grid="5" class="doodle">
  :doodle {
    @grid: 20 / 100vmax;
    grid-gap: 4vmax;
  }

  background: #26C6DA;
  transform: scale(@rand(.1, .9)) translate3d(@r(50px), @r(100px), 0);
  background: hsla(@r(360), 85%, @r(70%, 90%), @r(.9));
  border-radius: @r(10px);
</css-doodle>
  `}} style={{ margin: 0, padding: 0, border: 'none', }} />
  )
}
