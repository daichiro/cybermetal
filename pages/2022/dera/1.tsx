import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={45}>
      <Title
        title={'東京に住む貧乏人どもへの提言'}
        description={'東京とかいう金持ちのための街に住む貧乏人どもへの有益なアドバイス'}
        author={'ちんぴらD'}
        image={'/2022/dera/author.png'}
      />
      <Image href={'/2022/dera/tobirae.png'} widthPercentage={40} />
      <h2>はじめに</h2>
      <p>
        おれは「ちんぴらD」という者だ。特にサークル活動やSNS活動はしていない。ここに参加させてもらった理由なんだけど、「サイバーメタルチンピラ」とかいう中々イカしたタイトルのくせしてどいつもこいつもお上品で小難しいエリートみてぇなことしか書いてねぇことにイラついたからだ。つまり、この合同誌をよりクソ下品な作品にするために参加することにしたんだ、よろしくな。
      </p>
      <p>
        能書きはこの辺にしとくんだが、今回は東京とかいう金持ちのための街になぜか無理して住み続ける貧乏人どもにおれから1つ有益なアドバイスをしたいと思っている。
      </p>
      <h2>誰に向けた話なのか？</h2>
      <p>
        タイトルにも書いている通りこれは貧乏人どもに向けた話だ。おれが言ってる貧乏人ってのは具体的に言うと、ぶっちゃけ世帯年収1000万円以上いってない奴のことだ。
      </p>
      <p>
        もしお前が1人で1000万以上稼げる奴やパワーカップルとか言われるような奴らなら、マジで関係ねぇ話だから俺の話は無視して他の奴のお上品なお話でも読んでろ。あとそのまま東京で優雅な暮らしでも一生続けてろ。
      </p>
      <p>
        これは、1人で1000万稼ぐ力もねぇ金持ちな連れを捕まえる魅力もねぇクソ雑魚どもに向けた話だから、クソ雑魚どもはこれから書かれていることを心して読め。
      </p>
    </Pagination>
  )
}