import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skC4rCAdXPqEne3WL538dac3TaFwmFJGqbq6wbpJUcSJvpaTMDHQQM8QxJv2lcKvnaj91Li9qO6Obky0W9uC3S2pMedaf31SYXszAWCJuskNTCCEg4pGGrPabU8aBRo2O1EfBPbX5QlT6ibJBUct2rNrSXxm4K3gGHRrftTs9cBJ8TtdlcTS"
})
