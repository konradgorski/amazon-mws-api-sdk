import { HttpClient, Resource } from '../http'
import { getServiceStatusByResource } from './shared'

/**
 * The first API version is what's written in the folder name
 * but the second one is what's used in the request examples
 */
// const SHIPMENT_INVOICING_API_VERSION = '2018-11-01'
const SHIPMENT_INVOICING_API_VERSION = '2018-09-01'
export class ShipmentInvoicing {
  constructor(private httpClient: HttpClient) {}

  async getServiceStatus() {
    return getServiceStatusByResource(
      this.httpClient,
      Resource.ShipmentInvoicing,
      SHIPMENT_INVOICING_API_VERSION,
    )
  }
}
