import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <p>というわけでまずはフローチャート</p>
      <Image href={'/2023/happo31/chart.png'} description={'早わかり！Androidデバイス選定フローチャート！'} widthPercentage={65}/>
      <p>ここで察してもらった人はこの先を読まなくても大丈夫だと思います。</p>
      <h2>1. 目的を決める</h2>
      <p>まず何がしたいかを考えます。</p>
      <p>まあとはいえ、スマホを買う場合はある程度何でもこなせるメイン端末として使いたいという場合が多いとは思うので、ここはあまり真剣に悩まなくてもいいと思います。というのも、最近の
        Snapdragon
        シリーズはかつてに比べてかなり性能が上がっており、よほど安い端末でなければ大抵のことをするのに性能で不満を覚えることはほぼなくなっていると個人的には感じているからです。</p>
      <p>よって、<strong>ある程度何でもこなせるのは前提として、何を付加価値として重視するかを基準に選ぶのがよいでしょう。</strong></p>
      <p>ちなみに僕はガジェットに湯水のようにお金を使えるわけでもなく、そういう系統の仕事をしているとかでいろんな端末をもらえたり貸してもらえたりみたいな立場では決してないので、具体的にどれがいいみたいな例を挙げることはしません。最終的にはここに書いたポイントを参考にしながら自分で好みの端末を探してください。</p>
    </Pagination>
  )
}
