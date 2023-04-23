import EmptyImg from '@/assets/images/card/empty.png'
import { computed, ref } from "vue"

export default {
    props: {

    },
    setup() {

        const empty = ref(true)
        const emptyImg = computed(() => Proxy.EmptyImg || EmptyImg)

        const renderEmpty = () => {
            return <div className="g-card__empty" v-show={empty.value}>
                <img className="g-card__empty-img" src={emptyImg.value}></img>
                <div className="g-card__empty-text">当前图片暂无数据</div>
            </div>
        }

        return () => {
            return <>
                {renderEmpty()}
            </>
        }

    }
}