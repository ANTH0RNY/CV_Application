export default function Doodle2(){
  return(
  <div dangerouslySetInnerHTML={{__html:`
  <css-doodle grid="5" class="doodle">
  :doodle {
    @grid: 10 / 100vmax;
  }
  background: @pick(#29B6F6, #FDD835, #5E35B1, #FFCCBC, #E8EAF6, #B2DFDB, #1B5E20, #2979FF);
  opacity: @r(.9);
  clip-path: polygon(
    @rand(50%) 0, 50% @rand(70%), 0 @rand(100%)
  );

  animation: test infinite @r(100s, 150s) linear;

  @keyframes test {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(@r(-500%, 1000%), @r(-500%, 1000%), 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</css-doodle>
  `}}/>
  )
}
