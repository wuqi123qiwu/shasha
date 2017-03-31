define('countryChoose_tpl', function(){
  var tpl = [ '<div class="bs-modal bs-fade countrychoose-modal" id="countryChooseModal" role="dialog" aria-labelledby="countryChooseModalLabel">',
              '  <div class="bs-modal-header clearfix">',
              '    <button type="button" class="bs-close" data-dismiss="modal" aria-label="Close">',
              '      <span aria-hidden="true">&times;</span>',
              '    </button>',
              '  </div>',
              '  <div class="bs-modal-body">',
              '    <div class="cntselbox-logo"></div>',
              '    <div class="cntselbox-maincountry">',
              '      <div class="cntselbox-maincountry-tlt"></div>',
              '      <ul class="cntselbox-maincountry-cont cleanfix">',
              '        <li>',
              '          <i class="cntselbox-flag flag-china"></i>',
              '          <a href="#" class="J_cntselbox-trilink"><span class="cntselbox-name">China 中国</span></a>',
              '          <span class="cntselbox-lang">',
              '            <a href="#" data-loc="China|23" class="J_cntselbox-defaultlink J_cntselbox-link cntselbox-link">简</a>',
              '          </span>',
              '        </li>',
              '        <li>',
              '          <i class="cntselbox-flag flag-hk"></i>',
              '          <a href="#" class="J_cntselbox-trilink"><span class="cntselbox-name">Hong Kong 香港</span></a>',
              '          <span class="cntselbox-lang">',
              '            <a href="#" data-loc="Hong_Kong|21" class="J_cntselbox-link cntselbox-link">En</a> |',
              '            <a href="#" data-loc="Hong_Kong|22" class="J_cntselbox-defaultlink J_cntselbox-link cntselbox-link">繁</a> |',
              '            <a href="#" data-loc="Hong_Kong|23" class="cntselbox-link J_cntselbox-link">简</a>',
              '          </span>',
              '        </li>',
              '        <li>',
              '          <i class="cntselbox-flag flag-au"></i>',
              '          <a href="#" class="J_cntselbox-trilink"><span class="cntselbox-name">Australia 澳洲</span></a>',
              '          <span class="cntselbox-lang">',
              '            <a href="#" data-loc="Australia|21" class="J_cntselbox-defaultlink J_cntselbox-link cntselbox-link">En</a> |',
              '            <a href="#" data-loc="Australia|22" class="cntselbox-link J_cntselbox-link">繁</a> |',
              '            <a href="#" data-loc="Australia|23" class="cntselbox-link J_cntselbox-link">简</a>',
              '          </span>',
              '        </li>',
              '        <li>',
              '          <i class="cntselbox-flag flag-us"></i>',
              '          <a href="#" class="J_cntselbox-trilink"><span class="cntselbox-name">United States 美国</span></a>',
              '          <span class="cntselbox-lang">',
              '            <a href="#" data-loc="USA|21" class="J_cntselbox-defaultlink J_cntselbox-link cntselbox-link">En</a> |',
              '            <a href="#" data-loc="USA|22" class="cntselbox-link J_cntselbox-link">繁</a> |',
              '            <a href="#" data-loc="USA|23" class="cntselbox-link J_cntselbox-link">简</a>',
              '          </span>',
              '        </li>',
              '      </ul>',
              '    </div>',
              '    <div class="cntselbox-othcountry">',
              '      <div class="cntselbox-othcountry-tlt"></div>',
              '      <ul class="cntselbox-othcountry-cont cleanfix">',
              '        <li><a href="#" data-loc="Macau|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-mac"></i><span class="cntselbox-name">Macau 澳门</span></a></li>',
              '        <li><a href="#" data-loc="Japan|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-jp"></i><span class="cntselbox-name">Japan 日本</span></a></li>',
              '        <li><a href="#" data-loc="South_Korea|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-kr"></i><span class="cntselbox-name">South Korea 南韩</span></a></li>',
              '        <li><a href="#" data-loc="Thailand|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-th"></i><span class="cntselbox-name">Thailand 泰国</span></a></li>',
              '        <li><a href="#" data-loc="Malaysia|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-my"></i><span class="cntselbox-name">Malaysia 马来西亚</span></a></li>',
              '        <li><a href="#" data-loc="Philippines|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-ph"></i><span class="cntselbox-name">Philippines 菲律宾</span></a></li>',
              '        <li><a href="#" data-loc="Singapore|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-sg"></i><span class="cntselbox-name">Singapore 新加坡</span></a></li>',
              '        <li><a href="#" data-loc="Indonesia|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-id"></i><span class="cntselbox-name">Indonesia 印度尼西亚</span></a></li>',
              '        <li><a href="#" data-loc="United_Kingdom|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-uk"></i><span class="cntselbox-name">United Kingdom 英国</span></a></li>',
              '        <li><a href="#" data-loc="New_Zealand|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-nz"></i><span class="cntselbox-name">New Zealand 新西兰</span></a></li>',
              '        <li><a href="#" data-loc="Russia|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-ru"></i><span class="cntselbox-name">Russia 俄罗斯</span></a></li>',
              '        <li><a href="#" data-loc="Canada|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-ca"></i><span class="cntselbox-name">Canada 加拿大</span></a></li>',
              '        <li><a href="#" data-loc="International|21" class="J_cntselbox-link"><i class="cntselbox-flag flag-global"></i><span class="cntselbox-name">International 国际</span></a></li>',
              '      </ul>',
              '    </div>',
              '  </div>',
              '</div>'].join("");

  return tpl;
});
/* risksis ltd modified at 2016-08(mm)-26(dd) */
define('countryTips_tpl', function () {
  var tpl = [ '<div class="inabroad clb country-tips" id="J_countryTips" style="display: none;">',
              '  <!--<dl>',
              '    <dd>只限送中国地区。</dd>',
              '    <dd><i class="iconfont country-tips-img">&#xe648;</i>&emsp;Only delivery to China.</dd>',
              '  </dl>-->',
              '  <div class="abroad-cont" id=\'tipinfo_divbox\'>',
              '    <!--<i class="tip-arr iconfont">&#xe63a;</i>-->',
              '    <a href="javascript:;" id="J_countryTipsClose" onclick="closeDeliveryModal();"><i class="tip-close iconfont">&#xe627;</i></a>',
              '    <div>如需运送订单到中国以外的地区，请<a href="http://web1.sasa.com/SasaWeb/splash.jsp?cm_re=cn_top_globalsite">按此更改</a>。</div>',
              '    <div>If you wish to send your order to other countries, please <a href="http://web1.sasa.com/SasaWeb/splash.jsp?cm_re=cn_top_globalsite">click here</a> to change your location.</div>',
              '  </div>',
              '</div>'].join("");
  return tpl;
});

function closeDeliveryModal() {
   JQ('#J_countryTips').hide();
}

define('webSiteSelect', function(){
  var $ = window.jQuery;
  function website_select(val, lang, cb){
    if(!val){
      return false;
    }
    var urls = '/web-ajax_select_website.html';
    $.ajax({
      url: urls,
      type:'POST',
      dataType: 'html',
      data: 'attrval='+val+'&lang='+lang,
      success: function(res){
        var data = $.parseJSON(res);
        var state = data.state;
        var url = data.data;
        var is_cn = data.is_cn;
        var desc = data.desc;
        if(state == '0'){
          alert('非法操作！');
        }else{
          if(is_cn == '1'){
            !!cb & cb();
          }else{
            window.location.href = url;
          }
        }
      }
    });
  }
  var webSiteSelect = website_select;
  return webSiteSelect;
});

define(['countryChoose_tpl', 'countryTips_tpl','webSiteSelect','bsModalMgr', 'css!../../css/bootstrap-modal', 'css!../../css/countryChoose'], function(countryChoose_tpl, countryTips_tpl, Selectfn) {
  var $ = window.jQuery;
  function countryChoose() {
    var countryShowFlag = null,
        closeTipInfo_t = null;

    function closeModal () {
      $('#countryChooseModal').modal('hide');
    }

    function closeTipInfo () {
      clearTimeout(closeTipInfo_t);
      $('#tipinfo_divbox').hide();
      $('#J_topCartBar').off('click', '#J_countryTipsClose');
    }

    function tipInfoFn () {
      closeTipInfo_t = setTimeout(function () {
        closeTipInfo();
      }, 10000);

      $('#J_topCartBar').on('click', '#J_countryTipsClose', function(event) {
        event.preventDefault();
        closeTipInfo();
      });
    }

    function modalAction () {
      if (!!countryShowFlag) {
        $('body').append(countryChoose_tpl);
        $('#countryChooseModal').modal('show');
        $('.cntselbox-othcountry-cont,.cntselbox-maincountry-cont').on('click','.J_cntselbox-link', function(e){
          e.preventDefault();
          var _loc = $(this).data('loc'),
              _val = _loc.split('|')[0],
              _lang = _loc.split('|')[1];
          Selectfn(_val, _lang, closeModal);
        });

        $('.cntselbox-maincountry-cont').on('click','.J_cntselbox-trilink', function(e){
          e.preventDefault();
          $(this).parent().find('.J_cntselbox-defaultlink').trigger('click');
        });
        $('#countryChooseModal').on('hidden.bs-modal', function(e) {
          $('.cntselbox-maincountry-cont a[data-loc="China|23"]').trigger('click');
        });
      }
    }

    $.ajax({
      url: '/web-ajax_show_tip.html',
      type:'POST',
      dataType: 'json',
      data: {},
      success: function(res){
        if(res.show_tip){
          $('.header-main').prepend(countryTips_tpl);//.width(185);
          $('#J_countryTips').show();
          tipInfoFn();
          if(!!res.show_web_splash) {
            countryShowFlag = true;
            modalAction();
          }
        }
      }
    });

  }

  return countryChoose;
});