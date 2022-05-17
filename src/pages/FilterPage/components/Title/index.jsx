import React from "react";
import * as S from "./styles";

import { Row, Col, TreeSelect, Button, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Title = () => {
  const { TreeNode } = TreeSelect;
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <S.TitleColCustom>
        <Col span={24}>
          <a href="https://vexere.com/vi-VN">Vé xe khách</a>
          <span> {">"} Vé xe từ Đà Nẵng đi Hà Tĩnh </span>
        </Col>
      </S.TitleColCustom>
      <S.TitleColCustom>
        <Col span={16}>
          <TreeSelect
            showSearch
            style={{ width: "236px" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Tỉnh/Thành phố nơi đi"
            allowClear
            treeDefaultExpandAll
          >
            <TreeNode
              value="Tỉnh-Thành phố"
              title="Tỉnh-Thành phố"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode value="Đà Nẵng" title="Đà Nẵng"></TreeNode>
              <TreeNode
                value="TP Hồ Chí Minh"
                title="TP Hồ Chí Minh"
              ></TreeNode>
              <TreeNode value="Hà Nội" title="Hà Nội"></TreeNode>
              <TreeNode value="Hà Tĩnh" title="Hà Tĩnh"></TreeNode>
            </TreeNode>
            <TreeNode
              value="Quận-Huyện"
              title="Quận-Huyện"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode
                value="Liên Chiểu - Đà Nẵng"
                title="Liên Chiểu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Hải Châu - Đà Nẵng"
                title="Hải Châu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Thanh Xuân - Hà Nội"
                title="Thanh Xuân - Hà Nội"
              ></TreeNode>
              <TreeNode
                value="TP Hà Tĩnh - Hà Tĩnh"
                title="TP Hà Tĩnh - Hà Tĩnh"
              ></TreeNode>
            </TreeNode>
          </TreeSelect>
          <TreeSelect
            showSearch
            style={{ width: "236px" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Tỉnh/Thành phố nơi đến"
            allowClear
            treeDefaultExpandAll
          >
            <TreeNode
              value="Tỉnh-Thành phố"
              title="Tỉnh-Thành phố"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode value="Đà Nẵng" title="Đà Nẵng"></TreeNode>
              <TreeNode
                value="TP Hồ Chí Minh"
                title="TP Hồ Chí Minh"
              ></TreeNode>
              <TreeNode value="Hà Nội" title="Hà Nội"></TreeNode>
              <TreeNode value="Hà Tĩnh" title="Hà Tĩnh"></TreeNode>
            </TreeNode>
            <TreeNode
              value="Quận-Huyện"
              title="Quận-Huyện"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode
                value="Liên Chiểu - Đà Nẵng"
                title="Liên Chiểu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Hải Châu - Đà Nẵng"
                title="Hải Châu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Thanh Xuân - Hà Nội"
                title="Thanh Xuân - Hà Nội"
              ></TreeNode>
              <TreeNode
                value="TP Hà Tĩnh - Hà Tĩnh"
                title="TP Hà Tĩnh - Hà Tĩnh"
              ></TreeNode>
            </TreeNode>
          </TreeSelect>
          <Button
            type="primary"
            style={{
              backgroundColor: "#FFC500",
              color: "black",
              fontWeight: "bold",
            }}
          >
            TÌM CHUYẾN
          </Button>
        </Col>
        <Col span={4}></Col>
      </S.TitleColCustom>
      <S.TitleColCustom>
        <Col span={16}>
          <a
            target="_blank"
            href="/vi-VN/nhung-cau-hoi-thuong-gap.html"
            class="route__TrustMessage-sc-3icvq2-7 iJua-DT"
            style={{ color: "black", fontWeight: "bold", margin: "0px 3px" }}
          >
            VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé
          </a>
          <InfoCircleOutlined />
        </Col>
      </S.TitleColCustom>
    </Col>
  );
};

export default Title;
