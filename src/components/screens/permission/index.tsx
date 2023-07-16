import LogoPrimary from "@components/ui/logo-primary";
import Phone from "@screens/permission/phone";
import Text from "@screens/permission/text";
import Column from "@components/containers/column";


const  Permission = () => {
  return (
    <section className='container container_full'>
      <Column permission>
        <LogoPrimary/>
        <Phone/>
        <Text/>
      </Column>
    </section>
  )
}

export default Permission