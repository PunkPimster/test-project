import { createStore } from 'vuex'
import storeConfig from '@/store/index'

describe('Vuex Store', () => {
  let store

  beforeEach(() => {
    // Crear una nueva instancia de la store antes de cada prueba
    store = createStore(storeConfig)
  })

  describe('Getters', () => {
    it('should return the correct targetCountries', () => {
      expect(store.getters.targetCountriesGetter).toBe('EU')
    })

    /* it('should return the correct GDPR legislation', () => {
      expect(store.getters.gdprLegislationGetter).toBe(true)
    })

    it('should return the correct CCPA legislation', () => {
      expect(store.getters.ccpaLegislationGetter).toBe(false)
    })

    it('should return the correct consent by scroll', () => {
      expect(store.getters.consentByScrollGetter).toBe(false)
    })

    it('should return the correct consent per purpose', () => {
      expect(store.getters.consentPerPurposeGetter).toBe(false)
    })
  })

  describe('Mutations', () => {
    it('should set the target country correctly', () => {
      store.commit('setTargetCountry', 'US')
      expect(store.state.configDefault.targetCountries).toBe('US')
    })

    it('should set the GDPR legislation correctly', () => {
      store.commit('setGDPRLegislation', false)
      expect(store.state.configDefault.gdpr).toBe(false)
    })

    it('should set the CCPA legislation correctly', () => {
      store.commit('setCCPALegislation', true)
      expect(store.state.configDefault.ccpa).toBe(true)
    })

    it('should set the consent by scroll correctly', () => {
      store.commit('setConsentByScroll', true)
      expect(store.state.configDefault.consentByScroll).toBe(true)
    })

    it('should set the consent per purpose correctly', () => {
      store.commit('setConsentPerPurpose', true)
      expect(store.state.configDefault.perPurposeConsent).toBe(true)
    })

    it('should set the banner accept button display correctly', () => {
      store.commit('setAcceptButtonDisplay', true)
      expect(store.state.configDefault.banner.acceptButtonDisplay).toBe(true)
    })

    it('should set the banner reject button display correctly', () => {
      store.commit('setRejectButtonDisplay', true)
      expect(store.state.configDefault.banner.rejectButtonDisplay).toBe(true)
    })

    it('should set the banner close button display correctly', () => {
      store.commit('setCloseButtonDisplay', false)
      expect(store.state.configDefault.banner.closeButtonDisplay).toBe(false)
    })

    it('should set the banner close button rejects correctly', () => {
      store.commit('setCloseButtonRejects', true)
      expect(store.state.configDefault.banner.closeButtonRejects).toBe(true)
    })

    it('should set the banner title correctly', () => {
      store.commit('setTitleValue', 'New Title')
      expect(store.state.configDefault.banner.title).toBe('New Title')
    })
  })

  describe('Actions', () => {
    it('should dispatch and commit target country correctly', async () => {
      await store.dispatch('setTargetCountry', 'US')
      expect(store.state.configDefault.targetCountries).toBe('US')
    })

    it('should dispatch and commit GDPR legislation correctly', async () => {
      await store.dispatch('setGDPRLegislation', false)
      expect(store.state.configDefault.gdpr).toBe(false)
    })

    it('should dispatch and commit CCPA legislation correctly', async () => {
      await store.dispatch('setCCPALegislation', true)
      expect(store.state.configDefault.ccpa).toBe(true)
    })

    it('should dispatch and commit consent by scroll correctly', async () => {
      await store.dispatch('setConsentByScroll', true)
      expect(store.state.configDefault.consentByScroll).toBe(true)
    })

    it('should dispatch and commit consent per purpose correctly', async () => {
      await store.dispatch('setConsentPerPurpose', true)
      expect(store.state.configDefault.perPurposeConsent).toBe(true)
    })

    it('should dispatch and commit banner accept button display correctly', async () => {
      await store.dispatch('setAcceptButtonDisplay', true)
      expect(store.state.configDefault.banner.acceptButtonDisplay).toBe(true)
    })

    it('should dispatch and commit banner reject button display correctly', async () => {
      await store.dispatch('setRejectButtonDisplay', true)
      expect(store.state.configDefault.banner.rejectButtonDisplay).toBe(true)
    })

    it('should dispatch and commit banner close button display correctly', async () => {
      await store.dispatch('setCloseButtonDisplay', false)
      expect(store.state.configDefault.banner.closeButtonDisplay).toBe(false)
    })

    it('should dispatch and commit banner close button rejects correctly', async () => {
      await store.dispatch('setCloseButtonRejects', true)
      expect(store.state.configDefault.banner.closeButtonRejects).toBe(true)
    })

    it('should dispatch and commit banner title value correctly', async () => {
      await store.dispatch('setTitleValue', 'New Title')
      expect(store.state.configDefault.banner.title).toBe('New Title')
    }) */
  })
})
