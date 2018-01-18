'use strict';

const reader = require('../lib/reader.js');

const filePaths = [`${__dirname}/../assets/file1.txt`, `${__dirname}/../assets/file2.txt`, `${__dirname}/../assets/file3.txt`];

describe('It should return true there is data in the files', function() {
  it('It should return true there is data in the files', function() {

    return reader.fileLoader(filePaths, (err, fd) => {
      if (err) console.log(err);
      expect(fd).toBe(true);
    });
  });
});

describe('err should be null if call successfull', function() {
  it('err should be null if call successfull', function() {

    return reader.fileLoader(filePaths, (err, fd) => {
      if (err) console.log(err);
      expect(err).toBe(null);
    });
  });
});

describe('err should not be null with invalid paths', function() {
  it('err should not be null with invalid paths', function() {

    return reader.fileLoader(['file1.txt', 'file2.txt', 'file3.txt'], (err, fd) => {
      if (err) console.log(err);
      expect(err).not.toBe(null);
    });
  });
});

describe('File contents should be in order', function() {
  it('File contents should be in order', function() {

    return reader.fileLoader(filePaths, (err, fd) => {
      if (err) console.log(err);
      expect(fd).toBe([ '-Lorem Ipsum is simply dummy text-\n',
      '/It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)./\n',
      '+Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tortor at erat cursus lobortis. Duis rutrum lectus at nisl iaculis porttitor at vitae lorem. Aenean a ex sed turpis euismod fringilla at id mi. Fusce porttitor maximus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis leo, aliquet porttitor erat at, luctus imperdiet mi. Pellentesque dolor lacus, hendrerit et tortor ac, posuere mattis sapien. Etiam ac euismod lacus. Vivamus accumsan facilisis elit, sit amet accumsan ligula bibendum ac. Nunc purus augue, cursus ut lacinia in, posuere vitae velit.\n\nCurabitur cursus suscipit molestie. Aliquam dapibus, lorem a fringilla fringilla, nisl ipsum ultrices erat, eget ullamcorper eros ante at tellus. Nullam vehicula purus pretium consectetur cursus. Aenean eu neque nec dui interdum elementum. Donec eu felis eu diam efficitur luctus. Phasellus semper est massa, nec varius est posuere eu. Ut sagittis magna lacinia lorem pellentesque luctus. Ut cursus interdum erat, nec ullamcorper nisi mollis sit amet. Duis dapibus lacinia felis non finibus. Fusce id leo purus. Cras fermentum libero in sem euismod venenatis.\n\nUt auctor magna id leo consequat lacinia. Nunc urna orci, fermentum ut orci eu, interdum auctor lectus. Morbi tincidunt purus in velit auctor hendrerit. Integer aliquet vehicula odio id elementum. Integer dolor velit, fermentum vitae ornare eu, aliquam eu quam. Nam ac vestibulum diam. Maecenas non augue sem. Nullam rutrum dui nec feugiat vehicula.\n\nIn placerat magna quis orci vestibulum sodales. Sed malesuada dolor at tortor fermentum posuere. Donec sit amet mi ornare, lacinia urna quis, tincidunt neque. Donec lacinia orci sapien, non finibus risus tincidunt ac. Ut augue ligula, volutpat vitae egestas sit amet, cursus sit amet dolor. Nullam in libero vel risus luctus tincidunt non ut lectus. Nullam at mauris tellus. Duis commodo auctor ullamcorper. In maximus lacus id interdum luctus. Phasellus vitae fermentum nisi. Quisque pulvinar, velit ut facilisis rutrum, justo nulla porttitor tortor, eu aliquam est neque et orci. Cras vitae blandit ante. Nam porta tortor aliquet ex congue imperdiet.\n\nNam nec tellus a sapien interdum lobortis. Phasellus vestibulum mauris diam, ut placerat est consequat nec. Sed quis ipsum urna. Nam mauris augue, tincidunt vel vehicula non, malesuada non lacus. Donec maximus eros ac metus facilisis, vel semper tortor congue. Aliquam arcu diam, dignissim ac ante a, fringilla dictum dui. Sed tempor, dolor molestie interdum commodo, ligula libero placerat mauris, ut cursus elit erat ac enim. Cras sollicitudin mi eget risus aliquam, at euismod purus congue. Ut velit tortor, consequat sit amet sodales quis, efficitur vitae tellus. Praesent efficitur laoreet tortor quis mattis. Suspendisse consectetur feugiat enim quis placerat. Proin eu sodales eros, at laoreet magna. Sed ultricies ac erat quis feugiat. Curabitur nunc velit, vestibulum sed consectetur eu, tempor quis urna. Nunc eu nibh vitae felis lobortis fermentum a ut velit.\n\nMauris porttitor ultrices nulla, sed aliquam magna facilisis a. In hac habitasse platea dictumst. In imperdiet lectus lacus. Aliquam convallis at velit sit amet porttitor. Pellentesque purus ex, porta commodo accumsan at, euismod facilisis tortor. Curabitur vestibulum felis vitae sagittis dictum. Aliquam eget massa dui. Donec et dolor lectus.\n\nDonec non nisl eget sem viverra dapibus. Vestibulum ultrices lacus enim, eu malesuada nibh pharetra at. Nunc ex lectus, ornare sit amet tempus vel, pretium vitae augue. Phasellus eu nulla aliquet, finibus orci eu, aliquet nisl. Aliquam ac sem tellus. Curabitur sollicitudin ante pharetra, eleifend metus eu, consequat est. Curabitur sagittis orci turpis, a gravida ligula sollicitudin vitae. Nulla eleifend est magna, vitae hendrerit erat interdum eget. Nulla aliquet id turpis tincidunt rhoncus. Phasellus eleifend ante lorem, non iaculis ex tincidunt vel. Sed viverra ex in imperdiet tincidunt. Donec faucibus mauris at est dignissim maximus.\n\nAenean a nulla tincidunt, congue diam non, facilisis magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec faucibus purus ex, vel pharetra metus ultrices et. Suspendisse nec viverra lorem, et congue ante. Proin a maximus tellus. In aliquam, leo et commodo sagittis, sapien erat iaculis sem, sit amet condimentum dolor justo in tortor. Vivamus sapien libero, maximus vitae lectus vel, consectetur posuere nunc. Nulla placerat, augue quis efficitur blandit, elit nunc vulputate erat, ac efficitur lacus metus eget dui. Phasellus et risus id arcu tempus commodo. Vestibulum at eros id felis elementum ornare. Nunc dictum metus ut purus ultricies placerat. Pellentesque ac purus non diam hendrerit convallis a feugiat neque.\n\nFusce aliquet quam pellentesque dui imperdiet, nec dignissim quam mollis. Fusce euismod, nisl quis viverra ornare, turpis augue porta justo, a tempor diam mauris sit amet turpis. Cras sit amet porttitor ligula, in convallis nunc. Nam pellentesque nisl at lectus faucibus tempor. Proin rutrum non leo maximus cursus. Phasellus dictum facilisis leo, sit amet pulvinar risus rhoncus quis. Ut finibus a elit at tempus. Curabitur lacinia euismod odio, ac aliquet massa tempus non. Ut non lectus magna. Proin nec aliquet tortor. Suspendisse vitae lacus auctor, molestie urna sit amet, faucibus lectus. Morbi eget sagittis sem. Duis elementum hendrerit nunc eu varius. Nulla felis mi, aliquam sed dapibus vulputate, faucibus ac justo.\n\nAenean a feugiat ante. Etiam tincidunt id risus ac mollis. In in porttitor justo, eu ultrices orci. Vestibulum bibendum enim consectetur sapien commodo suscipit. Phasellus porttitor facilisis ante, non pharetra ipsum consequat consequat. Pellentesque luctus at sem sit amet blandit. Aenean bibendum, turpis in euismod gravida, augue massa convallis nisl, non interdum massa libero vitae eros. Nam efficitur magna mauris, sed volutpat arcu dictum nec. Fusce interdum felis velit, eu interdum nisl interdum sit amet. Ut eleifend congue vehicula. Maecenas pretium enim at elit vehicula pretium. Aliquam euismod elit vel ultrices luctus. Nunc fringilla augue vel orci ultricies aliquet.+\n' ]);
    });
  });
});
