import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Invoices', href: '/dashboard/invoices', active: true },
        ]}
      />
    </>
  )
}
