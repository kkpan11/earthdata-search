export const collectionListItemProps = {
  collectionMetadata: {
    cloudHosted: false,
    collectionDataType: 'SCIENCE_QUALITY',
    collectionId: 'collectionId1',
    consortiums: [],
    datasetId: 'Test Collection',
    displayOrganization: 'TESTORG',
    granuleCount: 10,
    hasCombine: false,
    hasFormats: false,
    hasSpatialSubsetting: false,
    hasTemporalSubsetting: false,
    hasTransforms: false,
    hasVariables: false,
    isCollectionInProject: false,
    isLast: false,
    isNrt: false,
    isOpenSearch: false,
    nrt: {},
    shortName: 'cId1',
    summary: 'This is a short summary.',
    temporalRange: '2010-10-10 to 2011-10-10',
    thumbnail: 'http://some.test.com/thumbnail/url.jpg',
    versionId: '2'
  },
  onAddProjectCollection: jest.fn(),
  onRemoveCollectionFromProject: jest.fn(),
  onViewCollectionGranules: jest.fn(),
  onViewCollectionDetails: jest.fn()
}

export const longSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const collectionResultsBodyData = {
  cloudHosted: true,
  collectionDataType: 'SCIENCE_QUALITY',
  collectionId: 'collectionId',
  consortiums: [],
  datasetId: 'test dataset id',
  displayOrganization: 'test/org',
  granuleCount: 42,
  hasCombine: false,
  hasFormats: false,
  hasMapImagery: false,
  hasSpatialSubsetting: false,
  hasTemporalSubsetting: false,
  hasTransforms: false,
  hasVariables: false,
  isCollectionInProject: false,
  isCSDA: false,
  isLast: true,
  isNrt: false,
  isOpenSearch: false,
  nrt: {},
  organizations: ['test/org'],
  shortName: 'test_short_name',
  summary: 'test summary',
  temporalEnd: '2019-01-15',
  temporalRange: '2019-01-14 to 2019-01-15',
  temporalStart: '2019-01-14',
  thumbnail: 'http://some.test.com/thumbnail/url.jpg',
  versionId: '2'
}

export const collectionData = [{
  collectionDataType: 'SCIENCE_QUALITY',
  collectionId: 'collectionId1',
  datasetId: 'Test Collection',
  displayOrganization: 'TESTORG',
  granuleCount: 10,
  hasCombine: false,
  hasFormats: false,
  hasSpatialSubsetting: false,
  hasTemporalSubsetting: false,
  hasTransforms: false,
  hasVariables: false,
  isCollectionInProject: false,
  isLast: true,
  isNrt: false,
  isOpenSearch: false,
  shortName: 'cId1',
  summary: 'This is a short summary.',
  temporalRange: '2010-10-10 to 2011-10-10',
  thumbnail: 'http://some.test.com/thumbnail/url.jpg',
  versionId: '2'
}]
