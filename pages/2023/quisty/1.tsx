import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination page={999}>
      <FullSizeImage href={'/2023/quisty/quisty1.png'}/>
    </Pagination>
  )
}
