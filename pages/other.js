import Link from "next/link";
import { increment } from "../redux/slice";
import { store, wrapper } from "../redux/store"

const Other = ({nums}) => {

  return (
    <>
      <Link href="/">back</Link>
      <div>
        {nums}
      </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(( store ) => async ({req, res, ...etc}) => {
  store.dispatch(increment());
  const nums = store.getState().counter.value;

  return {
    props: {nums}
  }
});

export default Other;
