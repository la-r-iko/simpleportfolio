import PlanSelector from '../../components/billing/PlanSelector'
import SubscriptionManager from '../../components/billing/SubscriptionManager'

export default function BillingPage() {
  return (
    <div>
      <PlanSelector />
      <SubscriptionManager />
    </div>
  )
}